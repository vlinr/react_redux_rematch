import * as React from 'react';
import styles from './edit.module.less';
import CustomForm,{CustomFormPropsType} from '@/components/CustomForm';
const { memo, useCallback } = React;

const DATA:CustomFormPropsType = {
    type: 'Yiminghe',
    name: '这是测试项目',
    desc: '这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目',
    keywords: '这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目',
    descrption: '这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目',
    tag: [
        '测试',
        '测试1'
    ],
    readnum: 999,
    experienceType: 2,
    // experienceTypeInput: 'https://www.this1.cn/',
    show: 0,
    imgfile:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    experienceTypeInput: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    content: `<p>这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目这是测试项目</p>`
}

//编辑页面
function EditContent(): React.ReactElement<any> {

    const onFinish = useCallback((values) => {
        console.log(values);
        console.log(values.content.toRAW(), values.content.toHTML())
    }, [])

    return <div className={styles.box}>
        <CustomForm onSubmit={onFinish} content={DATA} />
    </div>
}


export default memo(EditContent);