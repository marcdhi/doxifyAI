"use client"

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#3717e8',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export default function Basic(props) {

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        maxFiles: 1, accept: {
            'application/zip': ['.zip']
        }
    });

    const style = React.useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className='flex h-screen bg-black justify-center items-center relative'>
            <div className=' w-1/3 h-1/3 rounded-xl p-10 flex justify-between flex-col border-[1px] border-slate-600 hover:shadow-[5px_5px_rgba(86,_22,_122,_0.4),_10px_10px_rgba(86,_22,_122,_0.3),_15px_15px_rgba(86,_22,_122,_0.2),_20px_20px_rgba(86,_22,_122,_0.1),_25px_25px_rgba(86,_22,_122,_0.05)] z-10 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
                <h4 className=' flex justify-center m-4 font-semibold text-gray-100'>Upload Zip file of your code</h4>
                <section className="container">
                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        <p>Drag &apos;n&apos; drop, or click to select files</p>
                        <p>Choose only one file</p>
                    </div>
                    <aside>
                        {acceptedFiles.length > 0 &&
                            <>
                                <h4 className=' text-gray-100 font-semibold'>Files</h4>
                                <ul className=' text-gray-100'>{files}</ul>
                            </>}
                    </aside>
                </section>
            </div>
            <img src="/gradient.svg" loading="eager" alt="" className=' z-1 absolute'></img>
        </div>
    );
}