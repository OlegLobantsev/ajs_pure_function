export default function playerHealth(obj) {
  const { health } = obj;

  if (health > 50) {
    return 'healthy';
  } if (health <= 50 && health >= 15) {
    return 'wounded';
  }
  return 'critical';
}