// src/api.js or within your src/App.js
const apiEndpoint = 'https://bywu6us2ce.execute-api.us-east-2.amazonaws.com/prod/university';

export const fetchUniversityReviews = async (universityName) => {
    try {
        const response = await fetch(`${apiEndpoint}?name=${encodeURIComponent(universityName)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'VIA2s8Rs5w9KX1eMsmYCB7WCn5FBYECbaUMu4at0'
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data.reviews;
        } else {
            console.error('Server response not OK:', response);
            return [];
        }
    } catch (error) {
        console.error('Failed to fetch reviews:', error);
        return [];
    }
};
