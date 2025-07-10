import {
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            className="select-none rounded bg-gray-900 px-4 py-2.5 text-red-400"
            sideOffset={5}
          >
            {text}
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
}
