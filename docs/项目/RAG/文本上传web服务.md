---
sidebar_position: 2
---

# 文本上传web服务

## 快速理解

### 涉及代码

![1772116959301](image/文本上传web服务/1772116959301.png)

### 代码框架

![1772116603290](image/文本上传web服务/1772116603290.jpg)

## 代码实践

首先创建基本的文本数据`尺码推荐.txt`:

```text title="尺码推荐.txt"
身高：155-165cm，体重：75-95斤，建议尺码S。
身高：160-170cm，体重：90-115斤，建议尺码M。
身高：165-175cm，体重：115-135斤，建议尺码L。
身高：170-178cm，体重：130-150斤，建议尺码XL。
身高：175-182cm，体重：145-165斤，建议尺码2XL。
身高：178-185cm，体重：160-180斤，建议尺码3XL。
身高：180-190cm，体重：180-210斤，建议尺码4XL。
身高：190cm+，体重：210斤+，建议尺码5XL。
```

再创建一个`颜色选择.txt`

```txt
一、根据肤色
冷皮：适合宝蓝、正红、浅紫、薄荷绿等冷色调。不适合姜黄、土黄等暖黄色系。
暖皮：适合姜黄、砖红、橄榄绿、焦糖棕等暖色调。不适合宝蓝、薰衣草紫等冷色调。
黄黑皮：适合正红、宝蓝、深咖、墨绿、米白、雾霾蓝。不适合荧光色、芭比粉、浅杏色。

二、根据身材
显瘦：深色有收缩感，浅色亮色有膨胀感。
显高：全身同色系，上浅下深。
苹果型：腰腹用深色。
梨型：上浅下深。
倒三角：上深下浅。

三、场景搭配
职场：深灰+浅蓝，米白+焦糖棕。
约会：藕粉+香槟金，酒红+奶白。
休闲：牛仔蓝+明黄，军绿+卡其。
```

进入到当前目录，然后`streamlit run add_file_uploader.py`即可

```python title="add_file_uploader.py"
"""
基于Streamlit完成Web网页上传服务

pip install streamlit
"""
import streamlit as st

# 添加网页标题
st.title("知识更新服务")

# file_uploader
uploader_file = st.file_uploader(
    label="请上传TXT文件",
    type=['txt'],
    accept_multiple_files=False, # False表示仅接受一个文件的上传
)

# 提取文件的信息
if uploader_file is not None:
    file_name = uploader_file.name
    file_type = uploader_file.type
    file_size = uploader_file.size / 1024 # KB

    st.subheader(f"文件名：{file_name}")
    st.write(f"格式：{file_type} | 大小：{file_size:.2f} KB")

    # get_value -> bytes -> decode('utf-8')
    text = uploader_file.getvalue().decode("utf-8")
    st.write(text)
```
