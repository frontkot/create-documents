import React from 'react';
import { Field } from 'formik';

const TableItem = ({
    text, id, className, placeholder
}) => {
    return (
        // <label htmlFor={id} className={className}>
            <td className={className}>
                <Field
                    value={text}
                    id={id}
                    name={id}
                    type='text'
                    placeholder={placeholder}
                    className={`${className}__area`}
                    onChange={(e) => console.log(e.target.value)}
                />
            </td>
        // </label>
    );
};

export default TableItem;