//添加直播课
import * as React from 'react';
import { PropsType } from '@/components/Registration';
import { Form, Modal, Input, DatePicker, Select } from 'antd';
import moment from 'moment';
import { useForm } from 'antd/lib/form/Form';
const { Item } = Form;
const { OptGroup, Option } = Select;
const { useCallback } = React;
interface LiveCourdeType extends PropsType {
    onSubmit?: Function
}
const AddLiveCourse = ({ title, visible, handleOk, handleCancel, width }: LiveCourdeType): React.ReactElement<LiveCourdeType> => {

    const [form] = useForm();
    const onFinish = useCallback(
        (values) => {
            handleOk?.(values)
        },
        [handleOk],
    )

    return <Modal
        title={title}
        visible={visible}
        onOk={() => form.submit()}
        width={width}
        onCancel={() => handleCancel?.()}
    >
        <Form hideRequiredMark onFinish={onFinish} form={form}>
            <Item name={['courseName']} label="课程名称" rules={[{ required: true, message: "请输入课程名称" }]}>
                <Input placeholder="请输入课程名称" />
            </Item>
            <Item name={['openTime']} label="开课时间" rules={[{ required: true, message: "请选择开课时间" }]}>
                <DatePicker
                    placeholder="请选择开课时间"
                    format="YYYY-MM-DD HH:mm"
                    showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
                />
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
        </Form>
    </Modal>;
}


export default React.memo(AddLiveCourse);