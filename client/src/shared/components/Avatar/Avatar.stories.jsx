import Avatar from './index';

/**
 * Avatar component displays user profile pictures or initials.
 * When no image is provided, it shows the first letter of the name
 * with a color-coded background based on the name.
 */
export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    name: 'John Doe',
    size: 32,
  },
};

export const WithImage = {
  args: {
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    name: 'Jane Smith',
    size: 32,
  },
};

export const LargeSize = {
  args: {
    name: 'Alice',
    size: 64,
  },
};

export const LargeWithImage = {
  args: {
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    name: 'Bob Wilson',
    size: 64,
  },
};

export const SmallSize = {
  args: {
    name: 'Charlie',
    size: 24,
  },
};
