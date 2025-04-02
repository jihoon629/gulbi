export default async function handler(req, res) {
    const { itemName } = req.query;
  
    try {
      const response = await fetch(
        `https://api.neople.co.kr/df/auction?apikey=jBxYQP6iLWD8wItyu1TU7MomTvpYLVFx&itemName=${encodeURIComponent(
          itemName
        )}&sort=unitPrice:asc`
      );
  
      const data = await response.json();
      res.status(200).json(data); // Vercel 서버에서 클라이언트로 응답 전달
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data from API' });
    }
  }