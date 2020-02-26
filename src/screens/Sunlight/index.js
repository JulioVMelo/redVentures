import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Ui from './styles';
import Step from '../../components/Step';
import Border from '../../components/Border';
import Sun from '../../assets/images/sun.png';
import Arrow from '../../assets/images/arrow-green.png';
import Choice from '../../components/Choice';
import Logo from '../../components/Logo';

export default function Sunlight() {
  const [sunLevel, setSunLevel] = useState('');
  const history = useHistory();
  const { sun } = useParams();

  useEffect(() => {
    if (sun) {
      setSunLevel(sun);
    }
  }, [sun]);

  const handleSubmit = useCallback(() => {
    if (!sunLevel) {
      return console.log('nao vai dar nao');
    }
    return history.push(`/sunlight/${sunLevel}/water`);
  }, [history, sunLevel]);

  const handlePrev = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Ui.Container>
      <Logo />
      <Border />
      <Step image={Sun}>
        First, set the amount of <br />
        <strong>sunlight</strong> your plant will get.
      </Step>

      <Ui.ListChoice>
        <div className="form">
          <Choice
            background={sunLevel === 'high'}
            color="#f5b08c"
            label="High sunlight"
            handleChange={e => setSunLevel(e)}
            value="high"
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.1139 12.4051H35.8861V0H34.1139V12.4051ZM35 17.7215C25.9611 17.7215 18.6076 25.0751 18.6076 34.1139C18.6076 43.1528 25.9611 50.5063 35 50.5063C44.0389 50.5063 51.3924 43.1528 51.3924 34.1139C51.3924 25.0751 44.0389 17.7215 35 17.7215ZM35 52.2785C24.9838 52.2785 16.8354 44.1301 16.8354 34.1139C16.8354 24.0977 24.9838 15.9494 35 15.9494C45.0162 15.9494 53.1646 24.0977 53.1646 34.1139C53.1646 44.1301 45.0162 52.2785 35 52.2785ZM35.8861 57.5949V70H34.1139V57.5949H35.8861ZM0 35.8861H12.4051V34.1139H0V35.8861ZM70 35.8861H57.5949V34.1139H70V35.8861ZM19.2825 18.7634L10.5113 9.9921L11.7642 8.73919L20.5354 17.5105L19.2825 18.7634ZM51.237 50.7178L60.0083 59.4891L61.2612 58.2362L52.4899 49.4649L51.237 50.7178ZM10.8778 59.4891L9.62491 58.2362L18.3962 49.4649L19.6491 50.7178L10.8778 59.4891ZM50.3506 17.5105L51.6036 18.7634L60.3748 9.9921L59.1219 8.73919L50.3506 17.5105Z"
              />
            </svg>
          </Choice>
          <Choice
            background={sunLevel === 'low'}
            color="#f5b08c"
            label="Low sunlight"
            handleChange={e => setSunLevel(e)}
            value="low"
          >
            <svg
              width="67"
              height="67"
              viewBox="0 0 67 67"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.6519 16.538H34.3481V0H32.6519V16.538ZM33.5 21.6266C27.4208 21.6266 22.4747 26.5727 22.4747 32.6519C22.4747 38.7311 27.4208 43.6772 33.5 43.6772C39.5792 43.6772 44.5253 38.7311 44.5253 32.6519C44.5253 26.5727 39.5792 21.6266 33.5 21.6266ZM33.5 45.3734C26.4854 45.3734 20.7785 39.6665 20.7785 32.6519C20.7785 25.6373 26.4854 19.9304 33.5 19.9304C40.5146 19.9304 46.2215 25.6373 46.2215 32.6519C46.2215 39.6665 40.5146 45.3734 33.5 45.3734ZM34.3481 48.7658V67H32.6519V48.7658H34.3481ZM0 34.3481H16.538V32.6519H0V34.3481ZM67 34.3481H49.6139V32.6519H67V34.3481ZM21.451 20.954L10.0602 9.56319L11.2594 8.36397L22.6502 19.7548L21.451 20.954ZM45.6216 45.1247L57.4365 56.9396L58.6357 55.7404L46.8208 43.9255L45.6216 45.1247ZM10.4116 56.9396L9.21241 55.7404L20.1792 44.7736L21.3784 45.9728L10.4116 56.9396ZM44.7738 20.1789L45.973 21.3781L57.7879 9.56319L56.5887 8.36397L44.7738 20.1789Z"
              />
            </svg>
          </Choice>
          <Choice
            background={sunLevel === 'false'}
            color="#f5b08c"
            label="No sunlight"
            handleChange={e => setSunLevel(e)}
            value="false"
          >
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            home
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
