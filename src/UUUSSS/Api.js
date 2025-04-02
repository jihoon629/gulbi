export const itemNames = [
  '세리아의 풍성한 선물 Ver.2',
  '다정한 SD 세리아 Ver.2 알',
  '크리쳐 스킨 슬롯 확장권',
  '모험가의 의지 칭호 콤보 상자',
  '프로스트 킹덤 패키지',
  '바니바니 아라드 패키지',
];
export const seraItem = [5900, 5900, 3900, 9800, 39200, 19600];

/**
 * 특정 아이템의 경매장 데이터를 가져오는 함수
 * @param {number} index - itemNames 배열의 인덱스
 * @returns {Promise<object>} - 가공된 데이터 반환
 */
export async function fetchAuctionData(index) {
  const apiUrl = `/api/proxy?itemName=${encodeURIComponent(itemNames[index])}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.rows && data.rows.length > 0) {
      const itemData = data.rows[0]; // 0번째 값 가져오기
      return {
        itemName: itemData.itemName,
        count: itemData.count,
        currentPrice: itemData.currentPrice,
        unitPrice: itemData.unitPrice,
        regDate: itemData.regDate,
        expireDate: itemData.expireDate,
        seraPrice: seraItem[index], // 세라 가격 추가
      };
    } else {
      throw new Error('데이터가 없습니다.');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}