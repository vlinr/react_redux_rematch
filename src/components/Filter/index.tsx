import * as React from 'react';
import { Form, DatePicker, Select, Input, Button } from 'antd';
import styles from './index.module.less';
const { Item } = Form;
const { Option } = Select;
const {  useCallback } = React;
// const FORM_LAYOUT_CONTENT = {
//     labelCol: { span: 4 },
//     wrapperCol: { span: 17 },
// };
const { RangePicker } = DatePicker;
interface PropsType {
    addBtnClickHandle: Function,
    addBtnText: string,
    onSearch: Function,
    liveTime?:boolean,
    createTime?:boolean,
    openTime?:boolean,
    state?:boolean,
    subject?:boolean,
    showClass?:boolean,
    recommend?:boolean
}
const Filter = ({ addBtnClickHandle, addBtnText, onSearch,liveTime,createTime,openTime,state,showClass,subject,recommend }: PropsType): React.ReactElement<PropsType> => {
    const [form] = Form.useForm();
    const finishHandle = useCallback((values) => {
        onSearch(values);
    }, [onSearch]);
    return <div className={styles.filter}>
        <Form form={form} layout="inline" onFinish={finishHandle}>
            {liveTime && <Item name="liveTime" label="直播时间" style={{ marginBottom: 20 }}>
                <RangePicker />
            </Item>
            }
            {createTime && <Item name="createTime" label="创建时间" style={{ marginBottom: 20 }}>
                <RangePicker />
            </Item>
            }
            {openTime && <Item name="openTime" label="开课时间" style={{ marginBottom: 20 }}>
                <RangePicker />
            </Item>
            }
            {state && <Item name="state" label="状态" style={{ marginBottom: 20 }}>
                <Select placeholder="请选择" style={{ width: 120 }} >
                    <Option value={0}>待审核</Option>
                    <Option value={1}>已上线</Option>
                    <Option value={2}>已下线</Option>
                </Select>
            </Item>}
            {showClass && <Item name="class" label="年级" style={{ marginBottom: 20 }}>
                <Select placeholder="请选择" style={{ width: 120 }} >
                    <Option value={0}>初一</Option>
                    <Option value={1}>初二</Option>
                    <Option value={2}>初三</Option>
                    <Option value={3}>高一</Option>
                    <Option value={4}>高二</Option>
                    <Option value={5}>高三</Option>
                </Select>
            </Item>}
            {subject && <Item name="subject" label="学科" style={{ marginBottom: 20 }}>
                <Select placeholder="请选择" style={{ width: 120 }} >
                    <Option value={0}>语文</Option>
                    <Option value={1}>数学</Option>
                    <Option value={2}>英语</Option>
                </Select>
            </Item>}
            {recommend && <Item name="recommend" label="推荐" style={{ marginBottom: 20 }}>
                <Select placeholder="请选择" style={{ width: 120 }} >
                    <Option value={0}>是</Option>
                    <Option value={1}>否</Option>
                </Select>
            </Item>}
            <Item name="keyWords" style={{ marginBottom: 20 }}>
                <Input placeholder="请输入标题搜索" style={{ width: 200 }} />
            </Item>
            <Item style={{ marginBottom: 20 }}>
                <Button htmlType="submit" type="primary">搜索</Button>
            </Item>
        </Form>
        <Button className={styles.newBtn} type="danger" onClick={() => addBtnClickHandle()} >{addBtnText}</Button>
    </div>
}

export default React.memo(Filter);