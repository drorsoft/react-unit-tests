

export const checkURLData = async (url: string) => {
    const response = await fetch('https://apps-links.web.app/api/checkUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    });
   return await response.text();
};
