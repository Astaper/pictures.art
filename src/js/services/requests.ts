const postData = async (url: string, data: { [key: string]: string }) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.text();
};

const getResource = async (url: string) => {
    const res = await fetch(url);
    return await res.json();
};

export {postData, getResource};