import React, { useState } from 'react';
import '../responsive.css'; // 반응형 CSS 파일 import

export default function JuDdoJu() {
  const [gulbi, setGulbi] = useState(''); // 굴비 값 (백만 골드당 가격)
  const [packagePrice, setPackagePrice] = useState(''); // 패키지 가격 (원)
  const [auctionGold, setAuctionGold] = useState(''); // 경매장 판매가 (만 골드)
  const [time, setTime] = useState(''); // 횟수
  const [result, setResult] = useState(null); // 결과 값

  // 굴비 효율 계산 함수
  function JuDdoJuJak(gulbi, packagePrice, auctionGold, time) {
    return Math.round((auctionGold / 100) * gulbi - packagePrice) * time; // 총 차익 반올림
  }

  // 계산 버튼 클릭 핸들러
  const handleCalculate = () => {
    if (gulbi && packagePrice && auctionGold && time) {
      const totalProfit = JuDdoJuJak(
        Number(gulbi), // 굴비 값 (백만 골드당 가격)
        Number(packagePrice), // 패키지 가격 (원)
        Number(auctionGold), // 경매장 판매가 (만 골드)
        Number(time) // 횟수
      );
      setResult(totalProfit); // 결과 저장
    } else {
      alert('모든 값을 입력해주세요!');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">주또주 비용 계산기</h1>
      
      <div className="input-field">
        <label htmlFor="gulbi-input">굴비 값 (백만 골드당 가격)</label>
        <input
          id="gulbi-input"
          type="number"
          value={gulbi}
          onChange={(e) => setGulbi(e.target.value)}
          placeholder="굴비 값 입력"
        />
      </div>
      
      <div className="input-field">
        <label htmlFor="package-price-input">패키지 가격 (원)</label>
        <input
          id="package-price-input"
          type="number"
          value={packagePrice}
          onChange={(e) => setPackagePrice(e.target.value)}
          placeholder="패키지 가격 입력"
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
      
      <div className="input-field">
        <label htmlFor="time-input">횟수</label>
        <input
          id="time-input"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="횟수 입력"
        />
      </div>
      
      <button className="calc-button" onClick={handleCalculate}>
        계산하기
      </button>
      
      {result !== null && (
        <div className="result-container">
          <div className="result-value">
            <span className="result-label">총 차익:</span> {result.toLocaleString()} 원
          </div>
        </div>
      )}
    </div>
  );
}
