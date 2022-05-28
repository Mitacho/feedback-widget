import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand,
    height: 48,
    width: 48,
    borderRadius: 24,
    position: "absolute",
    bottom: getBottomSpace() + 16,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
});
