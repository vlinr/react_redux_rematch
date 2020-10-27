import * as React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import OpenCourseForm from '@/components/OpenCourseForm';
const { useCallback } = React;
const EditOpenCourse = () => {
    const onSubmit = useCallback(values => {

    }, [])
    return <>
        <CustomBreadcrumb />
        <OpenCourseForm onSubmit={onSubmit} />
    </>
}

export default React.memo(EditOpenCourse);