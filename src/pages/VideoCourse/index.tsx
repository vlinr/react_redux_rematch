import * as React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import Filter from '@/components/Filter';
import { Collapse, Button, Popconfirm, Table, Input, Switch, Pagination } from 'antd';
import styles from '../OpenCourse/index.module.less';
import { CaretDownOutlined } from '@ant-design/icons';
const { useCallback } = React;
const { Panel } = Collapse;
const showFilterItem: {
    liveTime?: boolean, createTime?: boolean, openTime?: boolean, state?: boolean, showClass?: boolean, subject?: boolean, recommend?: boolean
} = {
    liveTime: false, createTime: true, openTime: false, state: true, showClass: true, subject: true, recommend: true
}

const dataSource = [
    {
        id: '1',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 1,
    },
    {
        id: '2',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 2,
    },
    {
        id: '3',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 3,
    },
    {
        id: '4',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 4,
    },
];

const columns: any = [
    {
        title: '排序',
        dataIndex: 'sortKey',
        key: 'sortKey',
        width: 100,
        render: (text: any, record: any, index: number) => {
            return <Input value={index} onBlur={() => console.log('失去焦点了')} />
        }
    },
    {
        title: '资源ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '视频名称',
        dataIndex: 'videoName',
        key: 'videoName',
    },
    {
        title: '是否试听',
        dataIndex: 'state',
        key: 'state',
        width:100,
        render: (text: any, index: number) => {
            return <Switch defaultChecked />
        }
    },
    {
        title: '操作',
        dataIndex: 'method',
        key: 'method',
        width:250,
        render: (text: any, index: number) => {
            return <>
                <Button disabled style={{ marginRight: 10 }}>上移</Button>
                <Button type="primary" style={{ marginRight: 10 }}>下移</Button>
                <Popconfirm
                    title="您确定要移除本条数据?"
                    okText="确认"
                    cancelText="取消"
                >
                    <Button type="danger">移除</Button>
                </Popconfirm>
            </>
        }
    },
];

const VideoCourse = () => {
    const addBtnClickHandle = useCallback(() => {
        console.log('点击了新建按钮')
    }, [])

    const onSearch = (values: any) => {
        console.log(values)
    }
    return <div className={styles.videoCourse}>
        <CustomBreadcrumb />
        <Filter addBtnClickHandle={addBtnClickHandle} {...showFilterItem} addBtnText="新建视频课" onSearch={onSearch} />
        <Collapse accordion expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />} className="site-collapse-custom-collapse">
            <Panel className="site-collapse-custom-panel" header={
                <div className={styles.header}>
                    <div className={styles.img} style={{ backgroundImage: `url(${require('@/assets/images/free_stock_photo.jpg')})` }}></div>
                    <div className={styles.info}>
                        <h2>课程名称：【建哥数学】必修2（新课改人教B版）</h2>
                        <p>主讲老师：贤哥</p>
                        <div className={styles.tag}>
                            <span>建哥数学/高一</span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        {/**需要阻止冒泡，否则会出bug*/}
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => {e.nativeEvent.stopImmediatePropagation(); e.stopPropagation()}}>编辑</Button>
                        <Popconfirm
                            title="您确定要删除本条数据吗?"
                            okText="确认"
                            cancelText="取消"
                            onCancel={(e) => {e?.nativeEvent.stopImmediatePropagation();e?.stopPropagation()}}
                            onConfirm={(e) => {e?.nativeEvent.stopImmediatePropagation();e?.stopPropagation()}}
                        >
                            <Button type="danger" onClick={(e) => {e.nativeEvent.stopImmediatePropagation(); e.stopPropagation()}}>删除</Button>
                        </Popconfirm>
                    </div>
                </div>
            } key="1">
                <div className={styles.content}>
                    <Button type="primary" style={{ marginBottom: 20 }}>添加视频资源</Button>
                    <Table pagination={
                        {
                            current: 1,
                            total: 100,
                            pageSize: 10,
                            showQuickJumper: {
                                goButton: <Button style={{ marginLeft: 10 }}>跳转</Button>,
                            },
                            showTotal: (total: number) => `共 ${total} 条数据 `
                        }} rowKey={(record: any) => record.id} style={{ textAlign: 'center' }} bordered dataSource={dataSource} columns={columns} ></Table>
                </div>
            </Panel>
            <Panel className="site-collapse-custom-panel" header={
                <div className={styles.header}>
                    <div className={styles.img} style={{ backgroundImage: `url(${require('@/assets/images/free_stock_photo.jpg')})` }}></div>
                    <div className={styles.info}>
                        <h2>课程名称：【建哥数学】必修2（新课改人教B版）</h2>
                        <p>主讲老师：贤哥</p>
                        <div className={styles.tag}>
                            <span>建哥数学/高一</span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        {/**需要阻止冒泡，否则会出bug*/}
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => {e.nativeEvent.stopImmediatePropagation(); e.stopPropagation()}}>编辑</Button>
                        <Popconfirm
                            title="您确定要删除本条数据吗?"
                            okText="确认"
                            cancelText="取消"
                            onCancel={(e) => {e?.nativeEvent.stopImmediatePropagation();e?.stopPropagation()}}
                            onConfirm={(e) => {e?.nativeEvent.stopImmediatePropagation();e?.stopPropagation()}}
                        >
                            <Button type="danger" onClick={(e) => {e.nativeEvent.stopImmediatePropagation(); e.stopPropagation()}}>删除</Button>
                        </Popconfirm>
                    </div>
                </div>
            } key="2">
                <div className={styles.content}>
                    <Button type="primary" style={{ marginBottom: 20 }}>添加视频资源</Button>
                    <Table pagination={
                        {
                            current: 1,
                            total: 100,
                            pageSize: 10,
                            showQuickJumper: {
                                goButton: <Button style={{ marginLeft: 10 }}>跳转</Button>,
                            },
                            showTotal: (total: number) => `共 ${total} 条数据 `
                        }} rowKey={(record: any) => record.id} style={{ textAlign: 'center' }} bordered dataSource={dataSource} columns={columns} ></Table>
                </div>
            </Panel>
            <Panel className="site-collapse-custom-panel" header={
                <div className={styles.header}>
                    <div className={styles.img} style={{ backgroundImage: `url(${require('@/assets/images/free_stock_photo.jpg')})` }}></div>
                    <div className={styles.info}>
                        <h2>课程名称：【建哥数学】必修2（新课改人教B版）</h2>
                        <p>主讲老师：贤哥</p>
                        <div className={styles.tag}>
                            <span>建哥数学/高一</span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        {/**需要阻止冒泡，否则会出bug*/}
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => {e.nativeEvent.stopImmediatePropagation(); e.stopPropagation()}}>编辑</Button>
                        <Popconfirm
                            title="您确定要删除本条数据吗?"
                            okText="确认"
                            cancelText="取消"
                            onCancel={(e) => {e?.nativeEvent.stopImmediatePropagation();e?.stopPropagation()}}
                            onConfirm={(e) => {e?.nativeEvent.stopImmediatePropagation();e?.stopPropagation()}}
                        >
                            <Button type="danger" onClick={(e) => {e.nativeEvent.stopImmediatePropagation(); e.stopPropagation()}}>删除</Button>
                        </Popconfirm>
                    </div>
                </div>
            } key="3">
                <div className={styles.content}>
                    <Button type="primary" style={{ marginBottom: 20 }}>添加视频资源</Button>
                    <Table pagination={
                        {
                            current: 1,
                            total: 100,
                            pageSize: 10,
                            showQuickJumper: {
                                goButton: <Button style={{ marginLeft: 10 }}>跳转</Button>,
                            },
                            showTotal: (total: number) => `共 ${total} 条数据 `
                        }} rowKey={(record: any) => record.id} style={{ textAlign: 'center' }} bordered dataSource={dataSource} columns={columns} ></Table>
                </div>
            </Panel>
        </Collapse>
        <div style={{ textAlign: 'right' }}>
            <Pagination
                style={{ marginTop: 20 }}
                current={1}
                total={100}
                pageSize={10}
                showQuickJumper={{
                    goButton: <Button style={{ marginLeft: 10 }}>跳转</Button>,
                }}
                showTotal={(total: number) => `共 ${total} 条数据 `}
            ></Pagination>
        </div>
    </div>
}

export default React.memo(VideoCourse);