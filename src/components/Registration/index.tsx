import * as React from 'react';
import { Table, Modal,Button } from 'antd';
// const { useCallback } = React;
//报名情况
export interface PropsType {
    visible: boolean,
    title: string,
    handleOk?: Function,
    handleCancel?: Function,
    width?:number
}

const dataSource = [
    {
        name: '张三',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00',
    },
    {
        name: '洗吧',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00',
    },
    {
        name: '13246456',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00',
    },
    {
        name: '4',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00',
    },
];

const columns: any = [
    {
        title: '报名者',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '报名时间',
        dataIndex: 'signUpTime',
        key: 'signUpTime',
    },
    {
        title: '到课时间',
        dataIndex: 'reachTime',
        key: 'reachTime',
    },
    {
        title: '下课时间',
        dataIndex: 'downTime',
        key: 'downTime',
    }
];
const Registration = ({ visible, title, handleOk, handleCancel ,width}: PropsType): React.ReactElement<PropsType> => {
    return <Modal
        title={title}
        visible={visible}
        onOk={() => handleOk?.()}
        width={width}
        onCancel={() => handleCancel?.()}
    >
        <Table pagination={
            {
                current: 1,
                total: 100,
                pageSize: 10,
                showQuickJumper: {
                    goButton: <Button style={{ marginLeft: 10 }}>跳转</Button>,
                },
                showTotal: (total: number) => `共 ${total} 条数据 `
            }} rowKey={(record: any) => record.name} style={{ textAlign: 'center' }} bordered dataSource={dataSource} columns={columns} ></Table>
    </Modal>
}

export default React.memo(Registration);