import { observer } from 'mobx-react-lite';
import todos from '../store/todos';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function ProgressBar() {
  return (
    <div className="w-2/6 mx-auto flex items-center justify-center bg-[rgb(178, 190, 181)]">
      {todos.total > 0 && (
        <CircularProgressbarWithChildren
          value={todos.percentage}
          text={`${todos.percentage}%`}
          styles={buildStyles({
            pathColor: `rgba(16, 179, 255, ${todos.percentage / 100})`,
            textColor: '#0eb2ff',
            trailColor: '#808080',
            backgroundColor: '#3e98c7',
          })}
        >
          <p className="pt-12">
            Done
            <span className="ml-1">{todos.done}</span> of{' '}
            <span>{todos.total}</span>
          </p>
        </CircularProgressbarWithChildren>
      )}
    </div>
  );
}

export default observer(ProgressBar);
