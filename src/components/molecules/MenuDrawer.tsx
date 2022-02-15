import { VFC, memo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickSetting: () => void;
  onClickUserManagement: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickSetting,
    onClickUserManagement,
  } = props;

  const onClickHomeCloseMenu = () => {
    onClickHome();
    onClose();
  };

  return (
    <Drawer
      placement="left"
      size="xs"
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={true}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              w="100%"
              onClick={() => {
                onClickHome();
                onClose();
              }}
            >
              Top
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickUserManagement();
                onClose();
              }}
            >
              UserManagement
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickSetting();
                onClose();
              }}
            >
              Settings
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
