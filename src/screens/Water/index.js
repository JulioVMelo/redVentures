/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Ui from './styles';
import Step from '../../components/Step';
import Border from '../../components/Border';
import Arrow from '../../assets/images/arrow-green.png';
import Wateringcan from '../../assets/images/wateringcan.png';
import Choice from '../../components/Choice';
import Logo from '../../components/Logo';

export default function Water() {
  const [waterLevel, setWaterLevel] = useState('');
  const history = useHistory();
  const { sun, water } = useParams();

  useEffect(() => {
    if (water) {
      setWaterLevel(water);
    }
  }, [water]);

  const handleSubmit = useCallback(() => {
    if (!waterLevel) {
      return console.log('nao vai dar nao');
    }

    return history.push(`/sunlight/${sun}/water/${waterLevel}/pets`);
  }, [water, history, waterLevel, sun]);

  const handlePrev = useCallback(() => {
    history.push(`/sunlight/${sun}`);
  }, [history, sun, water]);

  return (
    <Ui.Container>
      <Logo />
      <Border />
      <Step image={Wateringcan}>
        How often do you want to <br />
        <strong>water</strong> your plant?
      </Step>

      <Ui.ListChoice>
        <div className="form">
          <Choice
            background={waterLevel === 'rarely'}
            color="#7BAF9E"
            value="rarely"
            label="rarely"
            handleChange={e => setWaterLevel(e)}
          >
            <svg viewBox="0 0 94 73" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.2979 2.58478C24.1928 6.52314 1.88652 28.5343 1.88652 41.7613C1.88652 56.2948 13.7348 68.1174 28.2979 68.1174C42.8609 68.1174 54.7092 56.2948 54.7092 41.7613C54.7092 28.5343 32.403 6.52314 28.2979 2.58478ZM28.2979 70C12.6944 70 0 57.3321 0 41.7613C0 26.4512 26.5264 1.64538 27.6555 0.596778L28.2979 0L28.9402 0.596778C30.0693 1.64538 56.5957 26.4512 56.5957 41.7613C56.5957 57.3321 43.9013 70 28.2979 70Z"
              />
            </svg>
          </Choice>
          <Choice
            label="Regularly"
            value="regularly"
            color="#7BAF9E"
            background={waterLevel === 'regularly'}
            handleChange={e => setWaterLevel(e)}
          >
            <svg viewBox="0 0 94 63" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.8571 2.02663C22.9611 5.58865 1.79048 25.4965 1.79048 37.4596C1.79048 50.6043 13.0356 61.2972 26.8571 61.2972C40.6787 61.2972 51.9238 50.6043 51.9238 37.4596C51.9238 25.4965 30.7532 5.58865 26.8571 2.02663ZM26.8571 62.9999C12.0481 62.9999 0 51.5425 0 37.4596C0 23.6125 25.1759 1.17698 26.2475 0.228586C26.5913 -0.0761953 27.123 -0.0761953 27.4668 0.228586C28.5384 1.17698 53.7143 23.6125 53.7143 37.4596C53.7143 51.5425 41.6662 62.9999 26.8571 62.9999ZM46.5524 63C45.7279 63 44.8908 62.9634 44.0663 62.8919C43.5739 62.8485 43.2114 62.4347 43.257 61.9665C43.3018 61.4982 43.7351 61.1534 44.2301 61.196C45 61.2633 45.7816 61.2973 46.5524 61.2973C60.374 61.2973 71.619 50.6036 71.619 37.4597C71.619 25.4957 50.4458 5.58618 46.5515 2.02671C45.5166 2.97 43.2597 5.06686 40.5274 7.84139C40.1881 8.18363 39.6215 8.20151 39.2616 7.88056C38.9008 7.5596 38.882 7.0207 39.2204 6.67761C42.9697 2.87088 45.8403 0.319695 45.9403 0.230875L45.9427 0.228671C46.2865 -0.0761099 46.8183 -0.0761099 47.162 0.228671C48.2336 1.17707 73.4095 23.6126 73.4095 37.4597C73.4095 51.5426 61.3614 63 46.5524 63ZM64.6568 62.8919C65.4813 62.9634 66.3183 63 67.1429 63C81.9519 63 94 51.5426 94 37.4597C94 23.6126 68.8241 1.17707 67.7525 0.228671C67.4087 -0.0761099 66.877 -0.0761099 66.5332 0.228671L66.5307 0.230875C66.4308 0.319695 63.5602 2.87088 59.8109 6.67761C59.4725 7.0207 59.4913 7.5596 59.852 7.88056C60.2128 8.20151 60.7777 8.18363 61.1179 7.84139C63.8502 5.06686 66.1071 2.97 67.142 2.02671C71.0362 5.58618 92.2095 25.4957 92.2095 37.4597C92.2095 50.6036 80.9644 61.2973 67.1429 61.2973C66.3721 61.2973 65.5905 61.2633 64.8206 61.196C64.3229 61.1534 63.8923 61.4982 63.8475 61.9665C63.8018 62.4347 64.1644 62.8485 64.6568 62.8919Z"
              />
            </svg>
          </Choice>
          <Choice
            label="Daily"
            value="daily"
            color="#7BAF9E"
            background={waterLevel === 'daily'}
            handleChange={e => setWaterLevel(e)}
          >
            <svg viewBox="0 0 94 63" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.8571 2.02663C22.9611 5.58865 1.79048 25.4965 1.79048 37.4596C1.79048 50.6043 13.0356 61.2972 26.8571 61.2972C40.6787 61.2972 51.9238 50.6043 51.9238 37.4596C51.9238 25.4965 30.7532 5.58865 26.8571 2.02663ZM26.8571 62.9999C12.0481 62.9999 0 51.5425 0 37.4596C0 23.6125 25.1759 1.17698 26.2475 0.228586C26.5913 -0.0761953 27.123 -0.0761953 27.4668 0.228586C28.5384 1.17698 53.7143 23.6125 53.7143 37.4596C53.7143 51.5425 41.6662 62.9999 26.8571 62.9999ZM46.5524 63C45.7279 63 44.8908 62.9634 44.0663 62.8919C43.5739 62.8485 43.2114 62.4347 43.257 61.9665C43.3018 61.4982 43.7351 61.1534 44.2301 61.196C45 61.2633 45.7816 61.2973 46.5524 61.2973C60.374 61.2973 71.619 50.6036 71.619 37.4597C71.619 25.4957 50.4458 5.58618 46.5515 2.02671C45.5166 2.97 43.2597 5.06686 40.5274 7.84139C40.1881 8.18363 39.6215 8.20151 39.2616 7.88056C38.9008 7.5596 38.882 7.0207 39.2204 6.67761C42.9697 2.87088 45.8403 0.319695 45.9403 0.230875L45.9427 0.228671C46.2865 -0.0761099 46.8183 -0.0761099 47.162 0.228671C48.2336 1.17707 73.4095 23.6126 73.4095 37.4597C73.4095 51.5426 61.3614 63 46.5524 63ZM64.6568 62.8919C65.4813 62.9634 66.3183 63 67.1429 63C81.9519 63 94 51.5426 94 37.4597C94 23.6126 68.8241 1.17707 67.7525 0.228671C67.4087 -0.0761099 66.877 -0.0761099 66.5332 0.228671L66.5307 0.230875C66.4308 0.319695 63.5602 2.87088 59.8109 6.67761C59.4725 7.0207 59.4913 7.5596 59.852 7.88056C60.2128 8.20151 60.7777 8.18363 61.1179 7.84139C63.8502 5.06686 66.1071 2.97 67.142 2.02671C71.0362 5.58618 92.2095 25.4957 92.2095 37.4597C92.2095 50.6036 80.9644 61.2973 67.1429 61.2973C66.3721 61.2973 65.5905 61.2633 64.8206 61.196C64.3229 61.1534 63.8923 61.4982 63.8475 61.9665C63.8018 62.4347 64.1644 62.8485 64.6568 62.8919Z"
              />
            </svg>
          </Choice>
        </div>

        <div className="actions">
          <button type="button" className="-prev" onClick={handlePrev}>
            <img src={Arrow} alt="prev" />
            previous
          </button>
          <button type="button" className="-next" onClick={handleSubmit}>
            <img src={Arrow} alt="next" />
            next
          </button>
        </div>
      </Ui.ListChoice>
    </Ui.Container>
  );
}
