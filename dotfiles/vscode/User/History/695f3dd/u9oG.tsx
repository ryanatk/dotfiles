import { FormattedMessage, useIntl } from 'react-intl';
import { t } from '../../../public/locales/LocaleContext';
import IconSpeaker from '../../../svg/icon-speaker-on.svg';
import { Typography } from '../../sormus';
import { GuidedSessions } from '../_global';
import { Em, Feature, Header, Section } from './components';

const ExperienceRelax = (): JSX.Element => {
  const { formatMessage } = useIntl();

  return (
    <Section id="relax">
      <Header
        title={
          <FormattedMessage
            id="experience_relax_title"
            values={{
              i(chunks) {
                return <Em>{chunks}</Em>;
              },
            }}
          />
        }
        subtitle={t('experience_relax_subtitle')}
      />

      <Feature
        title={t('experience_relax_feature_1_title')}
        body={t('experience_relax_feature_1_body')}
        src="experience_relax_feature_1_src"
        alt="experience_relax_feature_1_alt"
      >
        <Typography
          color="plum-light"
          className="mt-8 mb-4 flex items-center gap-2"
        >
          <IconSpeaker /> {t('experience_relax_sound_on')}
        </Typography>

        <GuidedSessions />
      </Feature>

      <Feature
        title={t('experience_relax_feature_2_title')}
        body={t('experience_relax_feature_2_body')}
        src="experience_relax_feature_2_src"
        alt="experience_relax_feature_2_alt"
        reverse
      />

      <div>
        <Feature
          title={t('experience_relax_feature_3_title')}
          body={t('experience_relax_feature_3_body')}
          src="experience/oe-ui-explore-03@3x"
          alt="experience_relax_feature_3_alt"
        />
      </div>
    </Section>
  );
};

export default ExperienceRelax;
