/**
 * Get the difference between the current time and a given time stamp
 */
export default function getDateDifference(timestamp: number) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffYears = Math.round(diff / (1000 * 3600 * 24 * 365));
  const diffMonths = Math.round(diff / (1000 * 3600 * 24 * 30));
  const diffWeeks = Math.round(diff / (1000 * 3600 * 24 * 7));
  const diffDays = Math.round(diff / (1000 * 3600 * 24));
  const diffHours = Math.round(diff / (1000 * 3600));
  const diffMinutes = Math.round(diff / (1000 * 60));
  const diffSeconds = Math.round(diff / 1000);

  const response =
    diffYears > 0
      ? `${diffYears} years ago`
      : diffMonths > 0
      ? `${diffMonths} months ago`
      : diffWeeks > 0
      ? `${diffWeeks} weeks ago`
      : diffDays > 0
      ? `${diffDays} days ago`
      : diffHours > 0
      ? `${diffHours} hours ago`
      : diffMinutes > 0
      ? `${diffMinutes} minutes ago`
      : `${diffSeconds} seconds ago`;
  return response;
}
