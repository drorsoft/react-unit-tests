export const checkURLData = async (url: string) => {
    const response = await fetch('https://urlhaus-api.abuse.ch/v1/url/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${url}`,
    });
   return await response.text();
};
