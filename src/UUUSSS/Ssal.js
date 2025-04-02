import React, { useState } from 'react';
import '../responsive.css'; // 반응형 CSS 파일 import

export default function Ssal() {
  const [gulbi, setGulbi] = useState('');
  const [seraItem, setSeraItem] = useState('');
  const [auctionGold, setAuctionGold] = useState('');
  const [result, setResult] = useState(null);

  function Ssal(Gulbi, seraItem, auctionGold) {
    const inGameGold = 100;
    const SsalMukgold = (inGameGold * seraItem) / Gulbi;
    const efficiency = (auctionGold * 0.97) / (SsalMukgold * 0.97);
    return efficiency * 100;
  }

  const handleCalculate = () => {
    if (gulbi && seraItem && auctionGold) {
      const efficiency = Ssal(Number(gulbi), Number(seraItem), Number(auctionGold));
      setResult(efficiency.toFixed(2)); // 소수점 2자리까지 표시
    } else {
      alert('모든 값을 입력해주세요!');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">굴비 세라 효율 계산기</h1>
      
      <div className="input-field">
        <label htmlFor="gulbi-input">굴비 값</label>
        <input
          id="gulbi-input"
          type="number"
          value={gulbi}
          onChange={(e) => setGulbi(e.target.value)}
          placeholder="굴비 값 입력"
        />
      </div>
      
      <div className="input-field">
        <label htmlFor="sera-item-input">구매 가격 (원)</label>
        <input
          id="sera-item-input"
          type="number"
          value={seraItem}
          onChange={(e) => setSeraItem(e.target.value)}
          placeholder="구매 가격 입력"
        />
      </div>
      
      <div className="input-field">
        <label htmlFor="auction-gold-input">경매장 판매가 (만 골드)</label>
        <input
          id="auction-gold-input"
          type="number"
          value={auctionGold}
          onChange={(e) => setAuctionGold(e.target.value)}
          placeholder="경매장 판매가 입력"
        />
      </div>
      
      <button className="calc-button" onClick={handleCalculate}>
        계산하기
      </button>
      
      {result !== null && (
        <div className="result-container">
          <div className={`result-value ${Number(result) < 90 ? 'efficiency-low' : 'efficiency-high'}`}>
            <span className="result-label">굴비 효율:</span> {result}%
          </div>
        </div>
      )}
    </div>
  );
}
