//一个基于button的切换按钮
//选择直播课弹出
import * as React from 'react';
import { Button } from 'antd';
const { useState ,useCallback } = React;

declare const ButtonType:["default", "primary", "ghost", "dashed", "link", "text", "danger"];

interface PropsType{
    selectdText?:string | React.ReactNode, //选中后的文字
    selectText?:string | React.ReactNode, //等待选中的文字
    defaultSelectd?:boolean, //是否默认选中
    onChange?:Function, //选中变化的时候回调
    selectClassName?:typeof ButtonType[number],
    noSelectClassName?:typeof ButtonType[number],
    [name:string]:string | React.ReactNode
}

const SwitchButton = (props:PropsType):React.ReactElement<PropsType> => {
    const {selectdText='选中',selectText='取消选中',defaultSelectd=false,onChange,selectClassName='danger',noSelectClassName='primary'} = props;
    const [select,setSelect] = useState(defaultSelectd);
    const selectAndCancelHandle = useCallback(
        () => {
            let sel = select;
            setSelect(!sel);
            onChange?.(!sel);
        },
        [select,setSelect,onChange],
    )
    return <>
        <Button type={!select?noSelectClassName:selectClassName} onClick={selectAndCancelHandle}>{!select?selectText:selectdText}</Button>
    </>
}

export default React.memo(SwitchButton);