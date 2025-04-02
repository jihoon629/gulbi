import React, { useState } from 'react';
import { fetchAuctionData, itemNames } from './Api';
import '../responsive.css'; // 반응형 CSS 파일 import

export default function Gulbi() {
  const [gulbi, setGulbi] = useState(''); // 굴비 값 (백만 골드당 가격)
  const [data, setData] = useState(null); // API 데이터
  const [error, setError] = useState(null); // 에러 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [efficiency, setEfficiency] = useState(null); // 효율 계산 결과

  // 효율 계산 함수
  function Ssal(gulbi, seraPrice, unitPrice) {
    const SsalMukgold = (seraPrice) / gulbi; // 굴비로 환산한 1세라당 골드
    const efficiency = (unitPrice * 0.97) / (SsalMukgold * 0.97); // 효율 계산
    return efficiency * 0.0001; // 퍼센트로 반환
  }

  // 데이터 가져오기 함수
  const handleFetchData = async (index) => {
    setLoading(true); // 로딩 시작
    setError(null); // 이전 에러 초기화
    setEfficiency(null); // 이전 효율 초기화
    try {
      const result = await fetchAuctionData(index); // 선택한 아이템 데이터 가져오기
      setData(result);
      if (gulbi) {
        const calculatedEfficiency = Ssal(Number(gulbi), result.seraPrice, result.unitPrice);
        setEfficiency(calculatedEfficiency.toFixed(2)); // 소수점 2자리로 표시
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">굴비 효율 계산기</h1>
      
      <div className="input-field">
        <label htmlFor="gulbi-input">굴비값 (백만 골드당 가격)</label>
        <input
          id="gulbi-input"
          type="number"
          value={gulbi}
          onChange={(e) => setGulbi(e.target.value)}
          placeholder="굴비 값 입력"
        />
      </div>
      
      <div className="item-button-group">
        {itemNames.map((itemName, index) => (
          <button 
            key={index} 
            className="item-button"
            onClick={() => handleFetchData(index)}
          >
            {itemName}
          </button>
        ))}
      </div>
      
      {loading && <div className="loading-indicator">데이터를 불러오는 중...</div>}
      
      {error && <div className="error-message">에러 발생: {error}</div>}
      
      {data && (
        <div className="item-details">
          <ul className="item-details-list">
            <li className="item-details-item">
              <strong className="result-label">아이템 이름:</strong> {data.itemName}
            </li>
            <li className="item-details-item">
              <strong className="result-label">등록 수량:</strong> {data.count}
            </li>
            <li className="item-details-item">
              <strong className="result-label">현재 가격:</strong> {data.currentPrice.toLocaleString()} 골드
            </li>
            <li className="item-details-item">
              <strong className="result-label">개당 가격:</strong> {data.unitPrice.toLocaleString()} 골드
            </li>
            <li className="item-details-item">
              <strong className="result-label">등록 날짜:</strong> {data.regDate}
            </li>
            <li className="item-details-item">
              <strong className="result-label">만료 날짜:</strong> {data.expireDate}
            </li>
            <li className="item-details-item">
              <strong className="result-label">세라 가격:</strong> {data.seraPrice} 원
            </li>
          </ul>
        </div>
      )}
      
      {efficiency && (
        <div className="result-container">
          <div className={`result-value ${efficiency < 90 ? 'efficiency-low' : 'efficiency-high'}`}>
            <span className="result-label">효율:</span> {efficiency}%
          </div>
        </div>
      )}
    </div>
  );
}
