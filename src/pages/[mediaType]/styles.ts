import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
  margin: 0 auto;
`;

export const Breadcrumb = styled.nav`
  width: 100%;
  margin: 0;
  position: absolute;
  padding: 0;
  background-color: #ffffffba;
  color: ${({ theme: { colors } }) => colors.secondary};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
  ul {
    list-style: none;
    display: flex;
    .icon {
      font-size: 14px;
    }
    li {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
      color: ${({ theme: { colors } }) => colors.primary};
      text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.5);
      a {
        color: ${({ theme: { colors } }) => colors.secondary};
        font-weight: bold;
        text-shadow: none;
        display: block;
        background: ${({ theme: { colors } }) => colors.primary};
        text-decoration: none;

        position: relative;
        height: 40px;
        line-height: 40px;
        padding: 0 10px 0 5px;
        text-align: center;
        margin-right: 23px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      &:nth-child(even) {
        a {
          background-color: ${({ theme: { colors } }) => colors.primary};
          &:before {
            border-color: ${({ theme: { colors } }) => colors.primary};
            border-left-color: transparent;
          }
          &:after {
            border-left-color: ${({ theme: { colors } }) => colors.primary};
          }
        }
      }
      &:first-child {
        a {
          padding: 0 1.6rem;
          border-radius: 4px 0 0 4px;
          &:before {
            border: none;
          }
        }
      }
      &:last-child {
        a {
          padding: 0 4rem 0 2rem;
          border-radius: 0 4px 4px 0;
          &:after {
            border: none;
          }
          &:hover {
            background-color: ${({ theme: { colors } }) => colors.primary};

            &:before {
              border-color: ${({ theme: { colors } }) => colors.primary};
              border-left-color: transparent;
            }
            &:after {
              border-left-color: ${({ theme: { colors } }) => colors.primary};
            }
          }
        }
      }
      a {
        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 0;
          border: 0 solid ${({ theme: { colors } }) => colors.primary};
          border-width: 20px 10px;
          width: 0;
          height: 0;
        }
        &:before {
          left: -20px;
          border-left-color: transparent;
        }
        &:after {
          left: 100%;
          border-color: transparent;
          border-left-color: ${({ theme: { colors } }) => colors.primary};
        }
        &:hover {
          background-color: ${({ theme: { colors } }) => colors.blueDarken};
          &:before {
            border-color: ${({ theme: { colors } }) => colors.blueDarken};
            border-left-color: transparent;
          }
          &:after {
            border-left-color: ${({ theme: { colors } }) => colors.blueDarken};
          }
        }
        &:active {
          background-color: ${({ theme: { colors } }) => colors.greenDarken};
          &:before {
            border-color: ${({ theme: { colors } }) => colors.greenDarken};
            border-left-color: transparent;
          }
          &:after {
            border-left-color: ${({ theme: { colors } }) => colors.greenDarken};
          }
        }
      }
    }
  }
`;

export const FigureBackDrop = styled.figure`
  margin: 0px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;

export const FigurePoster = styled.figure`
  position: absolute;
  top: -120px;
  left: 40px;
  margin: 0;
  width: 154px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Info = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px 0 10px 220px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Category = styled.p`
  width: 100%;
  margin: 10px 0;
  font-weight: bold;
`;
export const Runtime = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Overview = styled.p`
  margin: 20px 40px;
  font-size: 1rem;
  line-height: 20px;
`;

export const SubTitle = styled.h2`
  margin: 1rem 0;
  width: 100%;
`;

export const Recommendations = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
`;

export const RecommendationsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000;
`;
