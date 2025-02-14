const Usercard = () => {
    const profilePhoto = "https://via.placeholder.com/150";
    const name = "vereo";
    const email = "vereoman@gmail.com";
    const phone = "+91 8839380234";
    const address = "LPU Punjab Jalandhar";

    const cardStyle = {
        width: '300px',
        backgroundColor: '#000000',
        color: '#c0caf5',
        border: '1px solid #1a1c2a',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
    };

    const profilePhotoStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '12px',
    };

    const nameStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#7aa2f7',
        marginBottom: '8px',
    };

    const textStyle = {
        fontSize: '14px',
        margin: '4px 0',
    };

    return (
        <div style={cardStyle}>
            <img src={profilePhoto} alt="Profile" style={profilePhotoStyle} />
            <h2 style={nameStyle}>{name}</h2>
            <p style={textStyle}>Email: {email}</p>
            <p style={textStyle}>Phone: {phone}</p>
            <p style={textStyle}>Address: {address}</p>
        </div>
    );
};

export default Usercard;