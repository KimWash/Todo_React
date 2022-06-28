import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

/**
 * 플랫폼마다, 기기마다 다른 바텀 네비게이션 바의 높이를 계산해 주는 훅입니다.
 */
export default function optimizedLook() {
  return Platform.OS === 'ios' ? iosBestLook() : androidBestLook();
}

function iosBestLook() {
  const insets = useSafeAreaInsets();

  return {
    height: 60 + insets.bottom,
  };
}

function androidBestLook() {
  const insets = useSafeAreaInsets();

  return {
    height: 66 + insets.bottom
  };
}
