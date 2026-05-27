import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const PageTitle = styled.h1`
  ${font.bold}
  ${font.size(32)}
  color: #E13C3C; /* Red color to match toast error/danger theme */
  margin-bottom: 40px;
`;

export const Section = styled.div`
  margin-bottom: 40px;
  padding: 30px;
  background: ${color.backgroundLightest};
  border-radius: 4px;
  /* Provides visual separation between preset and custom toast sections */
`;

export const SectionTitle = styled.h2`
  ${font.medium}
  ${font.size(20)}
  color: ${color.textDark};
  margin-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  ${font.medium}
  ${font.size(14)}
  color: ${color.textDark};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  ${font.size(14)}
  color: ${color.textMedium};
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const SelectWrapper = styled.div`
  margin-bottom: 20px;
`;
