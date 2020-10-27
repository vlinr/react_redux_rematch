import * as React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import Filter from '@/components/Filter';
import { Collapse, Button, Popconfirm, Table, Pagination, Select } from 'antd';
import styles from './index.module.less';
import { CaretDownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Registration from '@/components/Registration';
import SelectLiveCourse from '@/components/SelectLiveCourse';
import AddLiveCourse from '@/components/AddLiveCourse';
import BindingLiveRoom from '@/components/BindingLiveRoom';
const { useCallback, useState } = React;
const { Panel } = Collapse;
const { Option } = Select;
const showFilterItem: {
    liveTime?: boolean, createTime?: boolean, openTime?: boolean, state?: boolean, showClass?: boolean, subject?: boolean, recommend?: boolean
} = {
    liveTime: true, createTime: false, openTime: false, state: true, showClass: true, subject: true, recommend: true
}

const dataSource = [
    {
        id: '1',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    },
    {
        id: '2',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    }, {
        id: '3',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    }, {
        id: '4',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    },
];


const OpenCourse = () => {

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
            title: '学科/年纪',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '直播间ID',
            dataIndex: 'id',
            key: 'id'

        },
        {
            title: '开课时间',
            dataIndex: 'studyTime',
            key: 'studyTime'

        },
        {
            title: '操作',
            dataIndex: 'method',
            key: 'method',
            width: 270,
            render: (text: any, index: number) => {
                return <>
                    <Button style={{ marginRight: 10 }} onClick={() => (setLiveTyep('edit'),setAddLiveCourseVisible(true))}>修改</Button>
                    <Button type="primary" style={{ marginRight: 10 }}>添加资源</Button>
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

    const history = useHistory();
    const addBtnClickHandle = useCallback(() => {
        console.log('点击了新建按钮')
        history.push('/newOpenCourse');
    }, [history])

    const editBtnClickHandle = useCallback(() => {
        console.log('点击了新建按钮')
        history.push('/editOpenCourse');
    }, [history])

    const [visible, setVisible] = useState(false);
    const [selectLiveCourseVisible, setSelectLiveCourseVisible] = useState(false);
    const [addLiveCourseVisible, setAddLiveCourseVisible] = useState(false);
    const [bindLiveRoomVisible, setBindLiveRoomVisible] = useState(false);
    const [liveTyep, setLiveTyep] = useState('new');
    const handleCancel = useCallback(() => {
        setVisible(false);
    }, [setVisible])
    const handleOk = useCallback(() => {
        setVisible(false);
    }, [setVisible])


    const handleSelectCancel = useCallback(() => {
        setSelectLiveCourseVisible(false);
    }, [setSelectLiveCourseVisible])
    const handleSelectOk = useCallback(() => {
        setSelectLiveCourseVisible(false);
    }, [setSelectLiveCourseVisible])


    const handleLiveCourseCancel = useCallback(() => {
        setAddLiveCourseVisible(false);
    }, [setAddLiveCourseVisible])
    const handleLiveCourseOk = useCallback((values) => {
        console.log(values, '这是添加直播课提交的内容')
        setAddLiveCourseVisible(false);
    }, [setAddLiveCourseVisible])


    const handleBindLiveRoomCancel = useCallback(() => {
        setBindLiveRoomVisible(false);
    }, [setBindLiveRoomVisible])
    const handleBindLiveRoomOk = useCallback(() => {
        setBindLiveRoomVisible(false);
    }, [setBindLiveRoomVisible])


    const addLiveRoomClick = useCallback(() => {
        console.log('弹出新建直播间')
    }, [])

    const searchHandle = useCallback((v) => {
        console.log('这是搜索的内容', v)
    }, [])

    const onSearch = (values: any) => {
        console.log(values)
    }
    return <div className={styles.openCourse}>
        <CustomBreadcrumb />
        <Filter addBtnClickHandle={addBtnClickHandle} {...showFilterItem} addBtnText="新建公开课" onSearch={onSearch} />
        <Collapse accordion expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />} className="site-collapse-custom-collapse">
            <Panel className="site-collapse-custom-panel" header={
                <div className={styles.header}>
                    <Select defaultValue={0} className={styles.select} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation() }}>
                        <Option value={0}>已上线</Option>
                        <Option value={1}>已审核</Option>
                        <Option value={2}>已下线</Option>
                    </Select>
                    <div className={styles.img} style={{ backgroundImage: `url(${require('@/assets/images/free_stock_photo.jpg')})` }}></div>
                    <div className={`${styles.info} ${styles.w450}`}>
                        <h2>课程名称：【建哥数学】必修2（新课改人教B版）</h2>
                        <p style={{ marginBottom: 0 }}>开课时间：2020-07-12 12：00</p>
                        <p style={{ marginBottom: 0 }}>创建时间：2020-07-12 12：00</p>
                        <p style={{ marginBottom: 5 }}>主讲老师：贤哥</p>
                        <div className={styles.tag}>
                            <span>建哥数学/高一</span>
                            <span>建哥数学/高二</span>
                            <span>推荐</span>
                        </div>
                    </div>
                    <div className={`${styles.button}`}>

                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); setVisible(true) }}>报名情况</Button>
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); editBtnClickHandle() }}>编辑</Button>
                        <Popconfirm
                            title="您确定要删除本条数据吗?"
                            okText="确认"
                            cancelText="取消"
                            onCancel={(e) => { e?.nativeEvent.stopImmediatePropagation(); e?.stopPropagation() }}
                            onConfirm={(e) => { e?.nativeEvent.stopImmediatePropagation(); e?.stopPropagation() }}
                        >
                            <Button type="danger" onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation() }}>删除</Button>
                        </Popconfirm>
                    </div>
                </div>
            } key="1">
                <div className={styles.content}>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => setSelectLiveCourseVisible(true)}>选择直播课</Button>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => (setLiveTyep('new'),setAddLiveCourseVisible(true))}>添加直播课</Button>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => setBindLiveRoomVisible(true)}>绑定直播间</Button>
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
                    <Select defaultValue={0} className={styles.select} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation() }}>
                        <Option value={0}>已上线</Option>
                        <Option value={1}>已审核</Option>
                        <Option value={2}>已下线</Option>
                    </Select>
                    <div className={styles.img} style={{ backgroundImage: `url(${require('@/assets/images/free_stock_photo.jpg')})` }}></div>
                    <div className={`${styles.info} ${styles.w450}`}>
                        <h2>课程名称：【建哥数学】必修2（新课改人教B版）</h2>
                        <p>主讲老师：贤哥</p>
                        <div className={styles.tag}>
                            <span>建哥数学/高一</span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); setVisible(true) }}>报名情况</Button>
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); editBtnClickHandle() }}>编辑</Button>
                        <Popconfirm
                            title="您确定要删除本条数据吗?"
                            okText="确认"
                            cancelText="取消"
                            onCancel={(e) => { e?.nativeEvent.stopImmediatePropagation(); e?.stopPropagation() }}
                            onConfirm={(e) => { e?.nativeEvent.stopImmediatePropagation(); e?.stopPropagation() }}
                        >
                            <Button type="danger" onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation() }}>删除</Button>
                        </Popconfirm>
                    </div>
                </div>
            } key="2">
                <div className={styles.content}>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => setSelectLiveCourseVisible(true)}>选择直播课</Button>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => (setLiveTyep('new'),setAddLiveCourseVisible(true))}>添加直播课</Button>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => setBindLiveRoomVisible(true)}>绑定直播间</Button>
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
                    <Select defaultValue={0} className={styles.select} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation() }}>
                        <Option value={0}>已上线</Option>
                        <Option value={1}>已审核</Option>
                        <Option value={2}>已下线</Option>
                    </Select>
                    <div className={styles.img} style={{ backgroundImage: `url(${require('@/assets/images/free_stock_photo.jpg')})` }}></div>
                    <div className={`${styles.info} ${styles.w450}`}>
                        <h2>课程名称：【建哥数学】必修2（新课改人教B版）</h2>
                        <p>主讲老师：贤哥</p>
                        <div className={styles.tag}>
                            <span>建哥数学/高一</span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); setVisible(true) }}>报名情况</Button>
                        <Button type="primary" style={{ marginRight: 15 }} onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); editBtnClickHandle() }}>编辑</Button>
                        <Popconfirm
                            title="您确定要删除本条数据吗?"
                            okText="确认"
                            cancelText="取消"
                            onCancel={(e) => { e?.nativeEvent.stopImmediatePropagation(); e?.stopPropagation() }}
                            onConfirm={(e) => { e?.nativeEvent.stopImmediatePropagation(); e?.stopPropagation() }}
                        >
                            <Button type="danger" onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation() }}>删除</Button>
                        </Popconfirm>
                    </div>
                </div>
            } key="3">
                <div className={styles.content}>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => setSelectLiveCourseVisible(true)}>选择直播课</Button>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => (setLiveTyep('new'),setAddLiveCourseVisible(true))}>添加直播课</Button>
                    <Button type="primary" style={{ marginBottom: 20, marginRight: 20 }} onClick={() => setBindLiveRoomVisible(true)}>绑定直播间</Button>
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

        <Registration visible={visible} handleCancel={handleCancel} handleOk={handleOk} width={900} title="报名情况" />
        <AddLiveCourse visible={addLiveCourseVisible} handleCancel={handleLiveCourseCancel} handleOk={handleLiveCourseOk} width={500} title={liveTyep=='new'?"添加直播课":"修改直播课"} />
        <SelectLiveCourse searchHandle={searchHandle} visible={selectLiveCourseVisible} handleCancel={handleSelectCancel} handleOk={handleSelectOk} width={900} title="选择直播课" />
        <BindingLiveRoom searchHandle={searchHandle} addLiveRoomClick={addLiveRoomClick} visible={bindLiveRoomVisible} handleCancel={handleBindLiveRoomCancel} handleOk={handleBindLiveRoomOk} width={900} title="绑定直播间" />

    </div>
}

export default React.memo(OpenCourse);