import React, { useState } from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Nature from "../../public/nature.jpg";

// MAIN LAYOUT
const Main = styled.div`
  width: 100%;
  padding: 20px 20px 40px;
  a {
    color: blue;
  }
`;

// CONTAINER
const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

// CARD RESPONSIVE
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 20px ${(p) => p.theme.inputBorder};
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  gap: 25px;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`;

// MAP WRAPPER
const PhotoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    width: 100%;
    gap: 20px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    font-weight: 400;
  }
`;

const Location = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

// FAKE DATA
const fakeProject = {
  title: "TashGRES",
  data: "01.06.2023 10:00",
  teacher: "Omonov Sanjar",
  teacher_num: "+998 90 123 45 67",
  status: "!",
  lat: 41.2995,
  lng: 69.2401,
  location:
    "Manzil: TOSHKENT shahar, Yunusobod tuman, Bog’ishamol ko'chasi, 2. Mo'ljal: KORZINKA",
};

export default function PractiseDetail() {
  const { id } = useParams();
  const [project] = useState(fakeProject);

  return (
    <Main>
      <Layout>
        <Card>
          {/* MAP SECTION */}
          <PhotoWrapper>
            <img src={Nature} alt="" />
          </PhotoWrapper>

          {/* DETAILS */}
          <Details>
            <Title>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequuntur, dolores ea repellendus tenetur mollitia voluptatem
              eveniet dolorem culpa exercitationem quaerat quam! Facilis aperiam
              quam odit voluptate atque? Omnis, deleniti!
            </Title>
          </Details>
        </Card>
      </Layout>
    </Main>
  );
}
