import { render } from '@testing-library/react';
import { ErrorNotification } from './error-notification';

// Mock the @metrostar/comet-uswds module
vi.mock('@metrostar/comet-uswds', () => ({
  Alert: ({ children }: { children: React.ReactNode }) => (
    <div className="usa-alert usa-alert--error">
      {children}
    </div>
  ),
}));

describe('ErrorNotification', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ErrorNotification error="error" />);

    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert')).toBeDefined();
    expect(baseElement.querySelector('.usa-alert--error')).toBeDefined();
  });
});
