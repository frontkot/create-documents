import React from 'react';
import { Field } from 'formik';

const TableItem = ({
    text, id, className, placeholder, readOnly
}) => {
    return (
            text ?
                <>
                    <div className={className}>
                        <Field
                            readOnly
                            value={text}
                            id={id}
                            name={id}
                            type='text'
                            className={`${className}__area`}
                        />
                    </div>
                </>
                : 
                <>
                    <div className={className}>
                        <Field
                            id={id}
                            name={id}
                            type='text'
                            placeholder={placeholder}
                            className={`${className}__area`}
                        />
                    </div>
                </>
    );
};

export default TableItem;