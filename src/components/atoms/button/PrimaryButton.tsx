import { Button } from "@chakra-ui/react";
import { VFC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <>
      <Button
        bg="teal"
        color="white"
        _hover={{ opacity: 0.8 }}
        isLoading={loading}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
});
