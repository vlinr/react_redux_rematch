//绑定直播间弹出
import * as React from 'react';
import { Table, Modal,Button,Input} from 'antd';
import { PropsType } from '@/components/Registration';
import SwicthButton from '@/components/SwitchButton';
import styles from './index.module.less';
// const { useCallback } = React;
const { Search } = Input;


const dataSource = [
    {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11011'
    },
    {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11012',
    },{
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11013',
    },{
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11014',
    },{
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11015',
    }
];

const columns: any = [
    {
        title: '直播间ID',
        dataIndex: 'liveRoomId',
        key: 'liveRoomId',
    },
    {
        title: '直播间名称',
        dataIndex: 'liveName',
        key: 'liveName',
    },
    {
        title: '学科/年级',
        dataIndex: 'subject',
        key: 'subject',
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

interface BindPropsType extends PropsType{
    addLiveRoomClick:Function,
    searchHandle:Function
}

const BindingLiveRoom = ({ visible, title, handleOk, handleCancel ,width,addLiveRoomClick,searchHandle}: BindPropsType): React.ReactElement<BindPropsType> => {
    return <Modal
        title={title}
        visible={visible}
        onOk={() => handleOk?.()}
        width={width}
        onCancel={() => handleCancel?.()}
    >
        <div className={styles.bindBox}>
            <Button type="primary" onClick={()=>addLiveRoomClick()}>新建直播间</Button>
            <Search placeholder="搜索直播间名" style={{width:300}} onSearch={(v)=>searchHandle(v)} enterButton />
        </div>
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

export default React.memo(BindingLiveRoom);

