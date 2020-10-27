//公开课新建或者修改页面
import * as React from 'react';
import { Form, Upload, message, Input, Select, Switch, InputNumber, Button, Row } from 'antd';
// import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import CustomBraftEditor from '@/components/CustomBraftEditor';
import { PlusOutlined } from '@ant-design/icons';
// import styles from './index.module.less';
const { useCallback, useState } = React;
const { Item } = Form;
const { Option, OptGroup } = Select;
const FORM_LAYOUT: any = {
    labelCol: { span: 3 },
    wrapperCol: { span: 15 },
}
function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('格式错误，支支持JPG或PNG');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
        message.error('图片超过大小，5M');
    }
    return isJpgOrPng && isLt5M;
}

interface PropsType {
    onSubmit:Function
}

const OpenCourseForm = ({onSubmit}:PropsType):React.ReactElement<PropsType> => {
    const onFinish = useCallback(values => {
        onSubmit(values);
    }, [onSubmit])
    const [imgUrl, setImgUrl] = useState('');
    const handleChange = (info: any) => {
        getBase64(info.file.originFileObj, (imgUrl: string) => setImgUrl(imgUrl));
    };
    const [editorState, setEditorState] = useState(null);
    return <Form onFinish={onFinish} {...FORM_LAYOUT} hideRequiredMark initialValues={{}}>
        <Item name="coverMap" label='课程详情封面' help={'建议图片比例：16：9'}>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                fileList={[]}
                onChange={handleChange}
            >
                {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : <PlusOutlined />}
            </Upload>
        </Item>
        <Item name="courseName" label="课程名称" rules={[{ required: true, max: 30, message: '请输入课程名称，并且保证在30字以内' }]}>
            <Input placeholder="请输入课程名称" />
        </Item>
        <Item name="courseNo" label="课程编号" rules={[{ required: true, message: '请输入课程编号' }]}>
            <Input placeholder="请输入课程编号" />
        </Item>
        <Item label="年级/学科" name="type" rules={[{ required: true, message: '请选择年纪/学科' }]}>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="请选择年纪/学科"
            >
                <OptGroup label="年级">
                    <Option value={0}>初一</Option>
                    <Option value={1}>初二</Option>
                    <Option value={2}>初三</Option>
                    <Option value={3}>高一</Option>
                    <Option value={4}>高二</Option>
                    <Option value={5}>高三</Option>
                </OptGroup>
                <OptGroup label="学科">
                    <Option value={6}>语文</Option>
                    <Option value={7}>数学</Option>
                    <Option value={8}>英语</Option>
                </OptGroup>
            </Select>
        </Item>
        <Item label="课程报价" name="price" rules={[{ required: true, message: '最小值为0', min: 0 }]}>
            <InputNumber style={{ width: "100%" }} placeholder="请输入课程报价" min={0} />
        </Item>
        <Item label="配套服务有效期" name="server" rules={[{ required: true, message: '请输入配套服务有效期' }]}>
            <Input placeholder="请输入配套服务有效期" addonAfter={<div>月</div>} />
        </Item>
        <Item label="课程介绍" name="courseDesc" rules={[{ required: true, message: '请输入课程介绍' }]}>
            <CustomBraftEditor editorState={editorState} setEditorState={setEditorState} defaultValue='' />
        </Item>
        <Item label="是否推荐" name="recommend">
            <Switch defaultChecked={true} />
        </Item>
        <Row style={{ textAlign: 'center' }}>
            <Button type="primary" style={{ width: 180, height: 40, margin: '30px auto' }} htmlType="submit">提交</Button>
        </Row>
    </Form>
}

export default React.memo(OpenCourseForm);