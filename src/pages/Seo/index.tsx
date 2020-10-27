import * as React from 'react'
import { Form, Input, InputNumber, Button, Select, message } from 'antd';
const { memo, useCallback, useState } = React;
const { Option } = Select;
const FORM_LAYOUT = {
    labelCol: { span: 3, offset: 4 },
    wrapperCol: { span: 12 },
};

//联系管理
function Seo(): React.ReactElement<any> {
    const [edit, setEdit] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);
    const onFinish = useCallback((values: any) => {
        console.log(values);
        setEdit(false);
        message.success('修改成功');
    }, [edit]);

    const editClickHandle = useCallback(
        () => {
            setEdit(true);
        },
        [edit],
    )
    return <Form {...FORM_LAYOUT} name="nest-messages" style={{ marginTop: 50 }} onFinish={onFinish}>
        <Form.Item name={['name']} label="所属栏目" initialValue={"w"} rules={[{ required: true ,message:'必须选择所属栏目'}]}>
            <Select style={{ width: 150 }} disabled={!edit} >
                <Option value="w">首页</Option>
                <Option value="jack">测试栏目1</Option>
                <Option value="lucy">测试栏目2</Option>
                <Option value="Yiminghe">测试栏目3</Option>
                <Option value="hz">测试栏目4</Option>
            </Select>
        </Form.Item>
        <Form.Item name={['title']} label="网页Title" rules={[{ required: true,message:'必须设置Title' }]}>
            <Input disabled={!edit} />
        </Form.Item>
        <Form.Item name={['keywords']} label="SEO关键词" rules={[{ required: true,message:'必须设置关键词' }]}>
            <Input disabled={!edit} />
        </Form.Item>
        <Form.Item name={['descrption']} label="SEO描述" rules={[{ required: true,message:'必须设置描述'}]}>
            <Input.TextArea disabled={!edit} rows={3} style={{resize:'none'}}/>
        </Form.Item>
        <Form.Item name={['copyright']} label="底部版权" rules={[{ required: true,message:'版权必须设置'}]}>
            <Input disabled={!edit} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center", marginTop: 50 }}>
            {edit && <Button loading={saveLoading} type="primary" htmlType="submit" size="large" style={{ marginRight: 20, width: 200 }}>
                保存
            </Button>
            }
            {
                !edit && <Button onClick={editClickHandle} size="large" style={{ marginRight: 20,width: 200 }}>
                    修改
            </Button>
            }
        </Form.Item>
    </Form>
}

export default memo(Seo);