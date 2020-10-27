//选择直播课弹出
import * as React from 'react';
import { Table, Modal,Button,Input} from 'antd';
import { PropsType } from '@/components/Registration';
import SwicthButton from '@/components/SwitchButton';
// const { useCallback } = React;
const { Search } = Input;
interface SelectPropsType extends PropsType{
    searchHandle:Function
}
const dataSource = [
    {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11011',
        opeTnime:'2020-09-09 12:00'
    },
    {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11012',
        opeTnime:'2020-09-09 12:00'
    },{
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11013',
        opeTnime:'2020-09-09 12:00'
    },{
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11014',
        opeTnime:'2020-09-09 12:00'
    },{
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11015',
        opeTnime:'2020-09-09 12:00'
    }
];

const columns: any = [
    {
        title: '直播课名称',
        dataIndex: 'liveName',
        key: 'liveName',
    },
    {
        title: '主讲老师',
        dataIndex: 'teacher',
        key: 'teacher',
    },
    {
        title: '学科',
        dataIndex: 'subject',
        key: 'subject',
    },
    {
        title: '直播间ID',
        dataIndex: 'liveRoomId',
        key: 'liveRoomId',
    },
    {
        title: '开课时间',
        dataIndex: 'opeTnime',
        key: 'opeTnime',
    },
    {
        title: '操作',
        dataIndex: 'method',
        key: 'method',
        width:110,
        align:'center',
        render:()=>{
            return <SwicthButton selectText="选择" selectdText="取消选择" onChange={(select:boolean)=>{
                console.log(select,'这个是否选择')
            }} />
        }
    },
];
const SelectLiveCourse = ({ visible, title, handleOk, handleCancel ,width,searchHandle}: SelectPropsType): React.ReactElement<SelectPropsType> => {
    return <Modal
        title={title}
        visible={visible}
        onOk={() => handleOk?.()}
        width={width}
        onCancel={() => handleCancel?.()}
    >
        <Search placeholder="搜索直播课名称" style={{marginBottom:20,width:300}} onSearch={v=>searchHandle(v)} enterButton />
        <Table pagination={
            {
                current: 1,
                total: 100,
                pageSize: 10,
                showQuickJumper: {
                    goButton: <Button style={{ marginLeft: 10 }}>跳转</Button>,
                },
                showTotal: (total: number) => `共 ${total} 条数据 `
            }} rowKey={(record: any) => record.liveRoomId} style={{ textAlign: 'center' }} bordered dataSource={dataSource} columns={columns} ></Table>
    </Modal>
}

export default React.memo(SelectLiveCourse);