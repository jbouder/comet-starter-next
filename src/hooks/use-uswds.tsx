const useUswds = () => {
  const headerOn = async (bodyElement: HTMLElement) => {
    const navigation = (await import("@uswds/uswds/js/usa-header")).default;
    navigation.on(bodyElement);
  };

  const headerOff = async (bodyElement: HTMLElement) => {
    const navigation = (await import("@uswds/uswds/js/usa-header")).default;
    navigation.off(bodyElement);
  };

  return { headerOn, headerOff };
};

export default useUswds;
