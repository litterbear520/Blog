import React, { useState, useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from "lucide-react";
import styles from "./styles.module.css";

const NODES = [
  { id: "start", label: "Start", x: 160, y: 30, w: 120, h: 40, type: "rect" },
  { id: "api_call", label: "API Call", x: 160, y: 110, w: 120, h: 40, type: "rect" },
  { id: "check", label: "stop_reason?", x: 160, y: 200, w: 140, h: 50, type: "diamond" },
  { id: "execute", label: "Execute Tool", x: 160, y: 300, w: 120, h: 40, type: "rect" },
  { id: "append", label: "Append Result", x: 160, y: 380, w: 120, h: 40, type: "rect" },
  { id: "end", label: "Break / Done", x: 380, y: 200, w: 120, h: 40, type: "rect" },
];

const EDGES = [
  { from: "start", to: "api_call" },
  { from: "api_call", to: "check" },
  { from: "check", to: "execute", label: "tool_use" },
  { from: "execute", to: "append" },
  { from: "append", to: "api_call" },
  { from: "check", to: "end", label: "end_turn" },
];

const ACTIVE_NODES_PER_STEP = [
  [],
  ["start"],
  ["api_call"],
  ["check", "execute"],
  ["execute", "append"],
  ["api_call", "check", "execute", "append"],
  ["check", "end"],
];

const ACTIVE_EDGES_PER_STEP = [
  [],
  [],
  ["start->api_call"],
  ["api_call->check", "check->execute"],
  ["execute->append"],
  ["append->api_call", "api_call->check", "check->execute", "execute->append"],
  ["api_call->check", "check->end"],
];

const MESSAGES_PER_STEP = [
  [],
  [{ role: "user", detail: "Fix the login bug", color: "#3b82f6" }],
  [],
  [{ role: "assistant", detail: "tool_use: read_file", color: "#52525b" }],
  [{ role: "tool_result", detail: "auth.ts contents...", color: "#10b981" }],
  [
    { role: "assistant", detail: "tool_use: edit_file", color: "#52525b" },
    { role: "tool_result", detail: "file updated", color: "#10b981" },
  ],
  [{ role: "assistant", detail: "end_turn: Done!", color: "#8b5cf6" }],
];

const STEP_INFO = [
  { title: "The While Loop", desc: "每个 Agent 都是一个 while 循环，持续调用模型直到它说「停止」。" },
  { title: "用户输入", desc: "循环从用户发送消息开始。" },
  { title: "调用模型", desc: "将所有消息发给 LLM，它看到全部上下文后决定下一步。" },
  { title: "stop_reason: tool_use", desc: "模型想使用工具，循环继续。" },
  { title: "执行并追加", desc: "运行工具，将结果追加到 messages[]，再次喂给模型。" },
  { title: "再次循环", desc: "同样的代码路径，第二次迭代。模型决定编辑文件。" },
  { title: "stop_reason: end_turn", desc: "模型完成任务，循环退出。这就是整个 Agent。" },
];

function getPalette(isDark) {
  if (isDark) {
    return {
      nodeFill: "#27272a",
      nodeStroke: "#3f3f46",
      nodeText: "#d4d4d8",
      activeNodeFill: "#2563eb",
      activeNodeStroke: "#3b82f6",
      activeNodeText: "#ffffff",
      endNodeFill: "#7c3aed",
      endNodeStroke: "#a855f7",
      edgeStroke: "#52525b",
      activeEdgeStroke: "#3b82f6",
      arrowFill: "#71717a",
      labelFill: "#a1a1aa",
      iterFill: "#3b82f6",
      svgBg: "#0a0a0b",
      svgBorder: "#1e1e22",
      containerBg: "#09090b",
      containerBorder: "#27272a",
      panelLabel: "#52525b",
      msgListBg: "#0a0a0b",
      msgListBorder: "#1e1e22",
      emptyColor: "#3f3f46",
      msgCountBorder: "#27272a",
      msgCountColor: "#52525b",
      annotationBg: "rgba(30,58,138,0.2)",
      annotationBorder: "#1e3a5f",
      annotationTitle: "#93c5fd",
      annotationDesc: "#60a5fa",
      btnBorder: "#27272a",
      btnColor: "#71717a",
      btnHoverBg: "#18181b",
      btnHoverColor: "#e4e4e7",
      dotInactive: "#3f3f46",
      dotPast: "#93c5fd",
      stepCountColor: "#52525b",
    };
  }
  return {
    nodeFill: "#e2e8f0",
    nodeStroke: "#cbd5e1",
    nodeText: "#475569",
    activeNodeFill: "#2563eb",
    activeNodeStroke: "#3b82f6",
    activeNodeText: "#ffffff",
    endNodeFill: "#7c3aed",
    endNodeStroke: "#a855f7",
    edgeStroke: "#cbd5e1",
    activeEdgeStroke: "#3b82f6",
    arrowFill: "#94a3b8",
    labelFill: "#94a3b8",
    iterFill: "#3b82f6",
    svgBg: "#f8fafc",
    svgBorder: "#e2e8f0",
    containerBg: "#ffffff",
    containerBorder: "#e2e8f0",
    panelLabel: "#94a3b8",
    msgListBg: "#f8fafc",
    msgListBorder: "#e2e8f0",
    emptyColor: "#cbd5e1",
    msgCountBorder: "#e2e8f0",
    msgCountColor: "#94a3b8",
    annotationBg: "#eff6ff",
    annotationBorder: "#bfdbfe",
    annotationTitle: "#1e40af",
    annotationDesc: "#1d4ed8",
    btnBorder: "#e2e8f0",
    btnColor: "#94a3b8",
    btnHoverBg: "#f1f5f9",
    btnHoverColor: "#334155",
    dotInactive: "#e2e8f0",
    dotPast: "#93c5fd",
    stepCountColor: "#94a3b8",
  };
}

function getNode(id) {
  return NODES.find((n) => n.id === id);
}

function edgePath(fromId, toId) {
  const from = getNode(fromId);
  const to = getNode(toId);
  if (fromId === "append" && toId === "api_call") {
    const startX = from.x - from.w / 2;
    const startY = from.y;
    const endX = to.x - to.w / 2;
    const endY = to.y;
    return `M ${startX} ${startY} L ${startX - 50} ${startY} L ${endX - 50} ${endY} L ${endX} ${endY}`;
  }
  if (fromId === "check" && toId === "end") {
    const startX = from.x + from.w / 2;
    const startY = from.y;
    const endX = to.x - to.w / 2;
    const endY = to.y;
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }
  return `M ${from.x} ${from.y + from.h / 2} L ${to.x} ${to.y - to.h / 2}`;
}

export default function AgentLoopViz() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const p = getPalette(isDark);

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSteps = 7;
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((s) => {
          if (s >= totalSteps - 1) {
            setIsPlaying(false);
            return s;
          }
          return s + 1;
        });
      }, 2500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const activeNodes = ACTIVE_NODES_PER_STEP[currentStep];
  const activeEdges = ACTIVE_EDGES_PER_STEP[currentStep];
  const stepInfo = STEP_INFO[currentStep];

  const visibleMessages = [];
  for (let s = 0; s <= currentStep; s++) {
    for (const msg of MESSAGES_PER_STEP[s]) {
      if (msg) visibleMessages.push(msg);
    }
  }

  return (
    <div className={styles.container} style={{ background: p.containerBg, borderColor: p.containerBorder }}>
      <div className={styles.panels}>
        {/* Left: SVG flowchart */}
        <div className={styles.leftPanel}>
          <div className={styles.panelLabel} style={{ color: p.panelLabel }}>
            while (stop_reason === "tool_use")
          </div>
          <svg
            viewBox="0 0 500 440"
            className={styles.svg}
            style={{ background: p.svgBg, borderColor: p.svgBorder }}
          >
            <defs>
              <marker id="alv-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill={p.arrowFill} />
              </marker>
              <marker id="alv-arrow-active" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill={p.activeEdgeStroke} />
              </marker>
            </defs>

            {EDGES.map((edge) => {
              const key = `${edge.from}->${edge.to}`;
              const isActive = activeEdges.includes(key);
              const fromNode = getNode(edge.from);
              const toNode = getNode(edge.to);
              return (
                <g key={key}>
                  <path
                    d={edgePath(edge.from, edge.to)}
                    fill="none"
                    stroke={isActive ? p.activeEdgeStroke : p.edgeStroke}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    markerEnd={isActive ? "url(#alv-arrow-active)" : "url(#alv-arrow)"}
                    style={{ transition: "stroke 0.4s, stroke-width 0.4s" }}
                  />
                  {edge.label && (
                    <text
                      x={edge.from === "check" && edge.to === "end" ? (fromNode.x + toNode.x) / 2 : fromNode.x + 75}
                      y={edge.from === "check" && edge.to === "end" ? fromNode.y - 10 : (fromNode.y + toNode.y) / 2}
                      textAnchor="middle"
                      fontSize={10}
                      fill={p.labelFill}
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}

            {NODES.map((node) => {
              const isActive = activeNodes.includes(node.id);
              const isEnd = node.id === "end";
              const fillColor = isActive ? (isEnd ? p.endNodeFill : p.activeNodeFill) : p.nodeFill;
              const strokeColor = isActive ? (isEnd ? p.endNodeStroke : p.activeNodeStroke) : p.nodeStroke;
              const textColor = isActive ? p.activeNodeText : p.nodeText;

              if (node.type === "diamond") {
                const { x: cx, y: cy, w, h } = node;
                const hw = w / 2, hh = h / 2;
                return (
                  <g key={node.id}>
                    <polygon
                      points={`${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`}
                      fill={fillColor} stroke={strokeColor} strokeWidth={1.5}
                      style={{ transition: "fill 0.4s, stroke 0.4s" }}
                    />
                    <text x={cx} y={cy + 4} textAnchor="middle" fontSize={11} fontWeight={600} fontFamily="monospace"
                      fill={textColor} style={{ transition: "fill 0.4s" }}>
                      {node.label}
                    </text>
                  </g>
                );
              }

              return (
                <g key={node.id}>
                  <rect
                    x={node.x - node.w / 2} y={node.y - node.h / 2}
                    width={node.w} height={node.h} rx={8}
                    fill={fillColor} stroke={strokeColor} strokeWidth={1.5}
                    style={{ transition: "fill 0.4s, stroke 0.4s" }}
                  />
                  <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize={12} fontWeight={600}
                    fontFamily="monospace" fill={textColor} style={{ transition: "fill 0.4s" }}>
                    {node.label}
                  </text>
                </g>
              );
            })}

            {currentStep >= 5 && (
              <text x={60} y={130} textAnchor="middle" fontSize={10} fontFamily="monospace" fill={p.iterFill}>
                iter #2
              </text>
            )}
          </svg>
        </div>

        {/* Right: messages[] */}
        <div className={styles.rightPanel}>
          <div className={styles.panelLabel} style={{ color: p.panelLabel }}>messages[]</div>
          <div className={styles.messageList} style={{ background: p.msgListBg, borderColor: p.msgListBorder }}>
            {visibleMessages.length === 0 && (
              <div className={styles.emptyMsg} style={{ color: p.emptyColor }}>[ empty ]</div>
            )}
            {visibleMessages.map((msg, i) => (
              <div key={i} className={styles.messageItem} style={{ backgroundColor: msg.color }}>
                <div className={styles.messageRole}>{msg.role}</div>
                <div className={styles.messageDetail}>{msg.detail}</div>
              </div>
            ))}
            {visibleMessages.length > 0 && (
              <div className={styles.messageCount}
                style={{ borderTopColor: p.msgCountBorder, color: p.msgCountColor }}>
                length: {visibleMessages.length}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Step annotation */}
      <div className={styles.annotation}
        style={{ background: p.annotationBg, borderColor: p.annotationBorder }}>
        <div className={styles.annotationTitle} style={{ color: p.annotationTitle }}>{stepInfo.title}</div>
        <div className={styles.annotationDesc} style={{ color: p.annotationDesc }}>{stepInfo.desc}</div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.buttons}>
          {[
            { icon: <RotateCcw size={16} />, title: "Reset", onClick: () => { setCurrentStep(0); setIsPlaying(false); }, disabled: false },
            { icon: <SkipBack size={16} />, title: "Prev", onClick: () => setCurrentStep((s) => Math.max(0, s - 1)), disabled: currentStep === 0 },
            { icon: isPlaying ? <Pause size={16} /> : <Play size={16} />, title: isPlaying ? "Pause" : "Play", onClick: () => setIsPlaying((p) => !p), disabled: false },
            { icon: <SkipForward size={16} />, title: "Next", onClick: () => setCurrentStep((s) => Math.min(totalSteps - 1, s + 1)), disabled: currentStep === totalSteps - 1 },
          ].map((btn) => (
            <button
              key={btn.title}
              onClick={btn.onClick}
              disabled={btn.disabled}
              title={btn.title}
              className={styles.btn}
              style={{ color: p.btnColor, "--btn-hover-bg": p.btnHoverBg, "--btn-hover-color": p.btnHoverColor }}
            >
              {btn.icon}
            </button>
          ))}
        </div>

        <div className={styles.stepIndicator}>
          <div className={styles.dots}>
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className={styles.dot} style={{
                backgroundColor: i === currentStep ? "#3b82f6" : i < currentStep ? p.dotPast : p.dotInactive,
              }} />
            ))}
          </div>
          <span className={styles.stepCount} style={{ color: p.stepCountColor }}>
            {currentStep + 1}/{totalSteps}
          </span>
        </div>
      </div>
    </div>
  );
}
