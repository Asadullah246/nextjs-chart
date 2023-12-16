export const getOpenJobPositions = async () => {
  const res = await fetch("https://truewealth.bamboohr.com/jobs/embed2.php");
  const text = await res.text();
  return text;
};
