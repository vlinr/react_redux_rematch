
//处理import()无法传入变量的问题，单个导入文件，直接在外部使用

/**
 * 将路由对应的组件在此处进行导入
 * **/
interface FilesType{
    [name:string]:()=>any
}
const Files:FilesType ={
    'EditOpenCourse':()=>import('@/pages/EditOpenCourse'),
    'NewOpenCourse':()=>import('@/pages/NewOpenCourse'),
    'OpenCourse':()=>import('@/pages/OpenCourse'),
    'VideoCourse':()=>import('@/pages/VideoCourse'),
    'Content':()=>import('@/pages/Content'),
    'NewContent':()=>import('@/pages/Content/NewContent'),
    'EditContent':()=>import('@/pages/Content/EditContent'),
    'NotFound':()=>import('@/pages/NotFound'),
    'Login':()=>import('@/pages/Login'),
}
export default Files