import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
  title: string;
}

export function Button({ isLoading, title, style, ...props }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
