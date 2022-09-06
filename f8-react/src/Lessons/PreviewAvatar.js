import { useState, useEffect } from 'react';

function PreviewAvatar() {
    const [avatar, setAvatar] = useState();
    console.log(avatar);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        const avatar = URL.createObjectURL(file)
        setAvatar(file)
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])

    return (
        <>
            <input type="file" onChange={handlePreviewAvatar}/>
            <img style={{width: '100px'}} src={avatar} alt="" />
        </>
    )
}

export default PreviewAvatar;