import NxWelcome from '../nx-welcome';

export default function Index() {
  return (
    <div>
      <div>
        <button type="button">
          <a href="/login">Login</a>
        </button>
      </div>
      <NxWelcome title={'myapp'} />
    </div>
  );
}
