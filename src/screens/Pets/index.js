import React, { useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Ui from './styles';
import Choice from '../../components/Choice';
import Step from '../../components/Step';
import Arrow from '../../assets/images/arrow-green.png';
import Dog from '../../assets/images/dog.png';
import Border from '../../components/Border';
import Logo from '../../components/Logo';

export default function Pets() {
  const history = useHistory();
  const { sun, water } = useParams();
  const [pet, setPet] = useState('');

  const handleSubmit = useCallback(() => {
    if (!pet) {
      return console.log('nao vai dar nao');
    }
    return history.push(`/sunlight/${sun}/water/${water}/pets/${pet}/store`);
  }, [history, pet, sun, water]);

  const handlePrev = useCallback(() => {
    history.push(`/sunlight/${sun}/water/${water}`);
  }, [history, sun, water]);

  return (
    <Ui.Container>
      <Logo />
      <Border />
      <Step
        image={Dog}
        subTitle="We are asking because some plants can be toxic for your buddy. "
      >
        Do you have pets? Do they <strong>chew</strong> plants?
      </Step>

      <Ui.ListChoice>
        <div className="form">
          <Choice
            background={pet === 'true'}
            color="#FD9872"
            value="true"
            label="yes"
            handleChange={e => setPet(e)}
          >
            <svg viewBox="0 0 94 70" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.7273 11.4539C26.4919 11.4539 26.2564 11.3668 26.0722 11.1928C25.6924 10.8324 25.6782 10.2336 26.0399 9.85615C31.5337 4.10953 38.9445 0.946289 46.907 0.946289C54.6045 0.946289 61.8406 3.93169 67.2831 9.35386C67.6544 9.72372 67.6544 10.3225 67.2831 10.6914C66.9128 11.0613 66.3118 11.0613 65.9405 10.6914C60.8569 5.62683 54.0975 2.83818 46.907 2.83818C39.4696 2.83818 32.5468 5.79426 27.4148 11.1597C27.2277 11.3555 26.978 11.4539 26.7273 11.4539ZM19.9534 9.90837C19.7074 9.90837 19.4273 9.97837 19.1596 10.2035C15.1186 13.6004 10.8867 23.0929 6.79438 32.2723L6.79437 32.2723L6.79432 32.2724C6.14011 33.7405 5.48971 35.1992 4.84595 36.619C1.83985 43.2501 1.14007 48.2835 2.70579 52.0067C4.563 56.4215 9.43106 58.5196 14.2583 60.2904C15.9313 60.9034 17.7306 60.6716 19.1966 59.6528C20.6731 58.6274 21.52 57.0108 21.52 55.2192V11.49C21.52 10.7512 21.0083 10.2508 20.5696 10.0484C20.4462 9.99161 20.2202 9.90837 19.9534 9.90837ZM16.1364 62.5209C15.2885 62.5209 14.434 62.3705 13.6022 62.0659C8.61165 60.2346 3.10648 57.8536 0.954922 52.737C-0.826331 48.5039 -0.119907 42.9767 3.11502 35.8415C3.75688 34.4235 4.40539 32.9696 5.05864 31.5043C9.23832 22.129 13.5604 12.4359 17.9347 8.75715C18.888 7.95688 20.2031 7.79323 21.37 8.33242C22.6148 8.90851 23.419 10.1477 23.419 11.49V55.2192C23.419 57.603 22.2464 59.8401 20.2828 61.2051C19.0295 62.0754 17.5948 62.5209 16.1364 62.5209ZM73.3861 9.90837C73.1193 9.90837 72.8933 9.99161 72.7699 10.0484C72.3312 10.2508 71.8194 10.7512 71.8194 11.49V55.2192C71.8194 57.0108 72.6664 58.6274 74.1428 59.6528C75.6089 60.6716 77.4091 60.9034 79.0812 60.2904C83.9084 58.5196 88.7765 56.4215 90.6337 52.0067C92.1994 48.2835 91.4996 43.2501 88.4945 36.619C87.8498 35.1992 87.1993 33.7405 86.5452 32.2724L86.5451 32.2723C82.4528 23.0929 78.2209 13.6004 74.1799 10.2035C73.9121 9.97837 73.632 9.90837 73.3861 9.90837ZM77.2031 62.5209C75.7446 62.5209 74.3109 62.0754 73.0566 61.2051C71.0931 59.8401 69.9204 57.603 69.9204 55.2192V11.49C69.9204 10.1477 70.7247 8.90851 71.9695 8.33242C73.1345 7.79323 74.4505 7.95688 75.4047 8.75715C79.779 12.4359 84.1012 22.129 88.2808 31.5043C88.9341 32.9696 89.5826 34.4235 90.2244 35.8415C93.4594 42.9767 94.1658 48.5039 92.3845 52.737C90.233 57.8536 84.7278 60.2346 79.7373 62.0659C78.9055 62.3705 78.05 62.5209 77.2031 62.5209ZM46.6702 53.7648C50.3153 53.7648 53.2701 51.8019 53.2701 49.3813C53.2701 46.9597 50.3153 44.9968 46.6702 44.9968C43.0241 44.9968 40.0702 46.9597 40.0702 49.3813C40.0702 51.8019 43.0241 53.7648 46.6702 53.7648ZM34.9362 34.7691C34.9362 35.9789 33.9516 36.9599 32.7362 36.9599C31.5209 36.9599 30.5362 35.9789 30.5362 34.7691C30.5362 33.5583 31.5209 32.5773 32.7362 32.5773C33.9516 32.5773 34.9362 33.5583 34.9362 34.7691ZM60.6035 36.9599C61.8179 36.9599 62.8035 35.9789 62.8035 34.7691C62.8035 33.5583 61.8179 32.5773 60.6035 32.5773C59.3882 32.5773 58.4035 33.5583 58.4035 34.7691C58.4035 35.9789 59.3882 36.9599 60.6035 36.9599ZM26.0564 61.4926C31.4989 66.9157 38.736 69.9021 46.4326 69.9021C54.3951 69.9021 61.8059 66.7379 67.2997 60.9922C67.6614 60.6148 67.6472 60.016 67.2674 59.6556C66.8876 59.2952 66.2875 59.3084 65.9248 59.6877C60.7928 65.0541 53.87 68.0102 46.4326 68.0102C39.243 68.0102 32.4836 65.2206 27.399 60.155C27.0278 59.7861 26.4267 59.7861 26.0564 60.155C25.6852 60.5249 25.6852 61.1237 26.0564 61.4926Z"
              />
            </svg>
          </Choice>
          <Choice
            background={pet === 'false'}
            color="#FD9872"
            value="false"
            label="no/they don't care"
            handleChange={e => setPet(e)}
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.4277 44.1787L49.7817 43.0437C52.7977 38.6677 54.3917 33.5327 54.3917 28.1967C54.3917 13.7517 42.6407 1.99969 28.1957 1.99969C23.3267 1.99969 18.5747 3.34469 14.4537 5.88969L13.4027 4.1877C17.8397 1.44869 22.9557 -0.000305176 28.1957 -0.000305176C43.7427 -0.000305176 56.3917 12.6487 56.3917 28.1967C56.3917 33.9407 54.6757 39.4677 51.4277 44.1787ZM28.1958 56.3921C12.6488 56.3921 -0.000183105 43.7441 -0.000183105 28.1961C-0.000183105 22.6171 1.62682 17.2221 4.70482 12.5961L6.36982 13.7041C3.51082 18.0001 1.99982 23.0121 1.99982 28.1961C1.99982 42.6411 13.7518 54.3921 28.1958 54.3921C33.6668 54.3921 38.9058 52.7241 43.3498 49.5671L44.5078 51.1981C39.7248 54.5961 34.0838 56.3921 28.1958 56.3921ZM53.7959 55.2104C53.9909 55.4054 54.2469 55.5034 54.5029 55.5034C54.7589 55.5034 55.0149 55.4054 55.2099 55.2104C55.6009 54.8194 55.6009 54.1874 55.2099 53.7964L2.59592 1.18239C2.20492 0.791395 1.57192 0.791395 1.18192 1.18239C0.790917 1.57239 0.790917 2.20539 1.18192 2.59639L53.7959 55.2104Z"
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
            <img src={Arrow} alt="finish" />
            next
          </button>
        </div>
      </Ui.ListChoice>
    </Ui.Container>
  );
}
