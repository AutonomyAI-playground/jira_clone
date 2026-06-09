import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 720px;
`;

export const PageTitle = styled.h1`
  ${font.size(24)}
  ${font.medium}
  color: ${color.primary};
  margin: 0 0 8px 0;
`;

export const PageDescription = styled.p`
  ${font.size(15)}
  color: ${color.textMedium};
  margin: 0 0 40px 0;
  line-height: 1.5;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0 0 16px 0;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};
  margin-bottom: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;
