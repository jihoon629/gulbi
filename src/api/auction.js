export default async function handler(req, res) {
  const { itemName, index } = req.query;
  const APIKey = 'jBxYQP6iLWD8wItyu1TU7MomTvpYLVFx';
  
  try {
    const apiUrl = `https://api.neople.co.kr/df/auction?apikey=${APIKey}&itemName=${encodeURIComponent(itemName)}&sort=unitPrice:asc`;
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: '데이터를 가져오는데 실패했습니다.' });
  }
}