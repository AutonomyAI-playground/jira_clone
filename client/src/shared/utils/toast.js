import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

const show = toast => pubsub.emit('toast', toast);

const success = title => show({ title });

const error = err => {
  show({
    type: 'danger',
    title: 'Error',
    message: get(err, 'message', err),
    duration: 0,
  });
};

// Additional helper methods for warning and info toast types
const warning = title => show({ type: 'warning', title });

const info = title => show({ type: 'info', title });

export default { show, error, success, warning, info };
