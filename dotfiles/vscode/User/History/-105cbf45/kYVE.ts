const DEFAULTS = { format: 'jpg' };

// TODO: update

const SOLUTIONS_IMAGES = [
  {
    path: 'experience/oe-lifestyle-carousel-01@2x',
    alt: 'experience_style_image_1_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-02@2x',
    alt: 'experience_style_image_2_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-03@2x',
    alt: 'experience_style_image_3_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-04@2x',
    alt: 'experience_style_image_4_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-05@2x',
    alt: 'experience_style_image_5_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-06@2x',
    alt: 'experience_style_image_6_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-07@2x',
    alt: 'experience_style_image_7_alt',
  },
  {
    path: 'experience/oe-lifestyle-carousel-08@2x',
    alt: 'experience_style_image_8_alt',
  },
].map((img) => ({ ...DEFAULTS, ...img })); // DRY helper

export default SOLUTIONS_IMAGES;
